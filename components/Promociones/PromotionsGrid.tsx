/* eslint-disable prefer-const */
import {
  Box,
  Button,
  Container,
  Grid,
  Spacer,
  Stack,
  Tag,
  Title
} from '@uala/abra';
import { useBreakpoint } from '@uala/abra-utils';
import { Filter, PromoCard, SearchBar } from '@uala-labssupport/ui';
import Link from 'next/link';
import { useState } from 'react';
import {
  filterPromotionOptions,
  filterPromotions,
  OrderByFilter,
  OrderByOptions
} from 'utils/Promotions';

const DEFAULT_QUANTITY_CARDS = 9;

const PromotionsGrid = ({ promotions, searchbar, filters, title }) => {
  const filterOptions = filterPromotionOptions(promotions);

  const isDesktop = useBreakpoint('lg');

  const [quantityCards, setQuantityCards] = useState(DEFAULT_QUANTITY_CARDS);
  const [promos, setPromos] = useState(promotions);
  const [orderBy, setOrderBy] = useState<string>('');
  const [filter, setFilter] = useState<Record<string, string[]>>({});

  const promotionsNames = promos.map(({ name }) => name);

  const promotionsCategories = promos.map(({ categories }) => categories);

  const dataSearch = promotionsNames.concat(
    ...new Set(promotionsCategories.flat())
  );

  const loadPromotions = () =>
    setQuantityCards((prevState) => prevState + DEFAULT_QUANTITY_CARDS);

  const handleSearchCategories = (e: string) => {
    if (e) {
      setPromos(
        promotions.filter(
          (promo) => promo.categories.includes(e) || promo.name === e
        )
      );
    } else {
      setPromos(promotions);
    }
  };

  const handleApplyFilters = (filter) => {
    const { orderBy, ...rest } = filter;
    if (orderBy) setOrderBy(orderBy.toString());
    setFilter(rest);
  };

  const handleRemoveFilter = (filter: string, value: string) => {
    setFilter((prevState) => {
      let newFilters = { ...prevState };

      if (!!newFilters[filter] && newFilters[filter].includes(value)) {
        const f = [...newFilters[filter]].filter((f) => f !== value);
        if (f.length > 0) newFilters[filter] = f;
        else {
          const { [filter]: removed, ...rest } = newFilters;
          newFilters = rest;
        }
      }

      return newFilters;
    });
  };

  const orderedPromotions =
    orderBy === ''
      ? promos
      : orderBy === OrderByOptions.Discount
      ? promotions.sort((p1, p2) => (p1.name < p2.name ? 1 : -1))
      : promotions.sort((p1, p2) => (p1.lastUpdate < p2.lastUpdate ? 1 : -1));

  const promotionsFinal = filterPromotions(orderedPromotions, filter);

  return (
    <Container layout="100">
      <Title as="h2" className="text-[28px] lg:text-[35px]">
        {title}
      </Title>
      <Stack
        direction={{
          '@initial': 'column',
          '@lg': 'row'
        }}
        align={{
          '@initial': 'start',
          '@lg': 'end'
        }}
        spacing="20"
        css={{ marginBottom: 50, marginTop: 45 }}
      >
        {searchbar && (
          <Box
            css={{
              width: isDesktop ? 470 : 329,
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'auto',
              '& div': {
                zIndex: 3
              }
            }}
          >
            <SearchBar
              defaultValue="¿Qué andas buscando?"
              data={dataSearch}
              handleOnChange={(e: string) => handleSearchCategories(e)}
            />
          </Box>
        )}
        {isDesktop && filters && filters.orderBy && (
          <Box
            css={{
              width: 350,
              position: 'relative',
              marginBottom: 60,
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'auto'
            }}
          >
            <Filter
              title="Ordenar por:"
              filters={[
                {
                  options: [
                    {
                      label: 'Más reciente',
                      name: 'button-type',
                      type: 'radio'
                    },
                    {
                      label: 'Mayor descuento',
                      name: 'button-type',
                      type: 'radio'
                    }
                  ]
                }
              ]}
              onSingleFilterChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setOrderBy(e.target.value)
              }
              subtitle={orderBy}
              multipleFilters={false}
            />
          </Box>
        )}
        {filters && filters.filter && (
          <Box
            css={{
              position: 'relative',
              marginBottom: 60,
              zIndex: 2,
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              alignSelf: 'auto'
            }}
          >
            <Filter
              title={filterOptions.title}
              filters={
                !isDesktop
                  ? OrderByFilter.concat(filterOptions.filters)
                  : filterOptions.filters
              }
              onFilterChange={handleApplyFilters}
              multipleFilters
              value={filter}
              totalSelectedFilters={
                Object.entries(filter).filter(
                  ([, value]) => !!value && value.length
                ).length
              }
            />
          </Box>
        )}
      </Stack>
      {Object.entries(filter).length > 0 && isDesktop && (
        <>
          <Stack align="start" direction="row" spacing="20">
            {Object.entries(filter)
              .filter((filter) => !!filter.length)
              .map(([filter, labels]) => (
                <>
                  {labels.map((label) => (
                    <Tag
                      key={`${label}-badge`}
                      variant="pending"
                      css={{ fontWeight: 600 }}
                    >
                      {label}&nbsp;
                      <button onClick={() => handleRemoveFilter(filter, label)}>
                        x
                      </button>
                    </Tag>
                  ))}
                </>
              ))}
          </Stack>
          <Spacer y="48" />
        </>
      )}

      {promotions.length === 0 && (
        <Title size="lg">Parece que no se encontraron promociones...</Title>
      )}

      {promotionsFinal.length > 0 ? (
        <Grid cols={{ '@initial': 2, '@lg': 3 }} spacing="20">
          {promotionsFinal
            .slice(0, quantityCards)
            .map(
              ({
                id,
                slug,
                card: { title, description },
                isFeatured,
                logo,
                payment
              }) => {
                return (
                  <Link key={id} href={`/promociones/${slug}`} passHref>
                    <PromoCard
                      title={title}
                      description={description}
                      isFeatured={isFeatured}
                      logo={{ url: logo?.src, alt: logo?.alt }}
                      {...payment}
                      isMobile={!isDesktop}
                    />
                  </Link>
                );
              }
            )}
        </Grid>
      ) : (
        <Stack
          align="center"
          direction="column"
          justify="center"
          spacing="40"
          css={{
            width: 600,
            margin: '$80 auto'
          }}
        >
          <Title
            align="center"
            size="lg"
            css={{ fontSize: 35, lineHeight: '42px', fontWeight: 500 }}
          >
            No se encontró ninguna promoción con estos filtros de búsqueda
          </Title>
          <Button
            variant="text"
            css={{
              textDecoration: 'underline',
              fontSize: 18,
              fontWeight: 600,
              '&:hover': { border: 'none !important' }
            }}
            onClick={() => setFilter({})}
          >
            Resetear búsqueda
          </Button>
        </Stack>
      )}

      {quantityCards < promos.length && (
        <Box css={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Button
            as="button"
            variant="primary"
            css={{ backgroundColor: '#022a9a !important' }}
            onClick={loadPromotions}
          >
            Cargar más promociones
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default PromotionsGrid;
