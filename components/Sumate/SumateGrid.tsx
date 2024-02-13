import { Box, Button, Container, Stack, Title } from '@uala/abra';
import { useBreakpoint } from '@uala/abra-utils';
import { Card, Filter, SearchBar } from '@uala-labssupport/ui';
import { useEffect, useState } from 'react';
import {
  filterPositions,
  filterPositionsOptionsByArea,
  filterPositionsOptionsByLocations,
  FILTERS
} from 'utils/Positions';

const DEFAULT_FILTER_VALUES: { [key in FILTERS]: any } = {
  [FILTERS.LOCATION]: null,
  [FILTERS.DEPARTMENT]: null
};

const SumateGrid = ({ positions, searchbar, filters, title }) => {
  const isDesktop = useBreakpoint('lg');

  const [filteredPositions, setFilteredPositions] = useState(positions);
  const [positionsByArea, setPositionsByArea] = useState(positions);
  const [selectedFilters, setSelectedFilters] = useState(DEFAULT_FILTER_VALUES);
  const [isFilteredInSearch, setIsFilteredInSearch] = useState(false);

  let filterOptionsByArea;
  let filterOptionsByLocations;
  if (positions.length > 0) {
    filterOptionsByArea = filterPositionsOptionsByArea(positions);
    filterOptionsByLocations = filterPositionsOptionsByLocations(positions);
  }

  let dataSearch = positions
    .map((p) => p.name)
    .concat(
      positions.map((p) => p.location),
      positions.map((p) => p.department)
    );
  dataSearch = [...new Set(dataSearch)];

  const handleChangeFilters = (key: FILTERS, value: string | null) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [key]: value
    }));
    setIsFilteredInSearch(false);
  };

  const handleSearchCategories = (e: string) => {
    if (e) {
      const eLower = e.toLocaleLowerCase();
      setFilteredPositions(
        positions.filter(
          (p) =>
            p.name.toLocaleLowerCase().includes(eLower) ||
            p.location.toLocaleLowerCase().includes(eLower) ||
            p.department.toLocaleLowerCase().includes(eLower)
        )
      );
    } else {
      setFilteredPositions(positions);
    }
    setIsFilteredInSearch(true);
    setSelectedFilters(DEFAULT_FILTER_VALUES);
    // Modify URL path with new filters
  };

  const handleFiltersMobile = () => {
    let filterArea = filterOptionsByArea.filters;
    let filterLocation = filterOptionsByLocations.filters;
    filterArea[0]['filterTitle'] = 'Área';
    filterLocation[0]['filterTitle'] = 'Ubicación';
    return filterArea.concat(filterLocation);
  };

  useEffect(() => {
    if (
      selectedFilters.department === undefined &&
      selectedFilters.location === undefined
    ) {
      setSelectedFilters(DEFAULT_FILTER_VALUES);
    }
    const filterPositionsList = filterPositions(positions, selectedFilters);
    setFilteredPositions(filterPositionsList);
    // Modify URL query params path with new filters
  }, [selectedFilters]);

  useEffect(() => {
    const groupedArray = filteredPositions.reduce((acc, obj) => {
      const { department } = obj;
      if (!acc[department]) {
        acc[department] = [];
      }
      acc[department].push(obj);
      return acc;
    }, {});
    const resultArray = Object.entries(groupedArray).map(
      ([department, items]) => ({ department, items })
    );
    setPositionsByArea(resultArray);
  }, [filteredPositions]);

  const handleApplyFilters = (filter: {
    location: [string];
    department: [string];
  }) => {
    const ObjectFilter = {
      location: filter.location ? filter.location[0] : null,
      department: filter.department ? filter.department[0] : null
    };
    setIsFilteredInSearch(false);
    setSelectedFilters(ObjectFilter);
  };

  return (
    <Container layout="100" className="px-12 md:px-10">
      <Title as="h2" className="title-4 mb-5">
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
              width: isDesktop ? 400 : '-webkit-fill-available',
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
              placeholder="¿Qué posición buscas?"
              data={dataSearch}
              handleOnChange={(e: string) => handleSearchCategories(e)}
            />
          </Box>
        )}

        {isDesktop
          ? filters &&
            positions.length > 0 && (
              <div className="flex md:gap-2 ">
                <Box
                  css={{
                    width: 350,
                    position: 'relative',
                    marginBottom: 60,
                    zIndex: 1,
                    flexGrow: 0,
                    flexShrink: 1,
                    flexBasis: 'auto',
                    alignSelf: 'auto'
                  }}
                >
                  <Filter
                    title="Filtrar por área"
                    filters={filterOptionsByArea.filters}
                    onSingleFilterChange={(e) =>
                      handleChangeFilters(FILTERS.DEPARTMENT, e.department?.[0])
                    }
                    value={selectedFilters[FILTERS.DEPARTMENT]}
                  />
                </Box>
                <Box
                  css={{
                    width: 350,
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
                    title="Filtrar por ubicación"
                    filters={filterOptionsByLocations.filters}
                    onSingleFilterChange={(e) =>
                      handleChangeFilters(FILTERS.LOCATION, e.location?.[0])
                    }
                    value={selectedFilters[FILTERS.LOCATION]}
                  />
                </Box>
              </div>
            )
          : filters &&
            filters.filter &&
            positions.length > 0 && (
              <div className="flex md:gap-2">
                <Box
                  css={{
                    width: 'auto',
                    position: 'relative',
                    marginBottom: 60,
                    zIndex: 1,
                    flexGrow: 0,
                    flexShrink: 1,
                    flexBasis: 'auto',
                    alignSelf: 'auto',
                    maxWidth: '300px'
                  }}
                >
                  <Filter
                    title="Filtrar"
                    filters={handleFiltersMobile()}
                    onFilterChange={(e) => handleApplyFilters(e)}
                    multipleFilters
                  />
                </Box>
              </div>
            )}
      </Stack>
      {positions.length <= 0 && (
        <Title size="lg">Parece que no se encontraron posiciones...</Title>
      )}
      {filteredPositions.length > 0 ? (
        <div>
          {positionsByArea.map((p) => {
            return (
              <>
                <h1 className="title-4 mb-5 w-auto">{p.department}</h1>
                <div className="mb-7 grid md:grid-cols-3 gap-y-6 md:gap-y-7 sm:px-3">
                  {p.items?.map((i) => {
                    return (
                      <>
                        <Card
                          title={i.name}
                          description={i.location}
                          cardType="horizontal"
                          hasBtn
                          cta={{ title: 'CTA', url: `/sumate/${i.id}` }}
                        />
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      ) : (
        positions.length > 0 && (
          <Stack
            align="center"
            direction="column"
            justify="center"
            spacing="40"
            css={{
              width: 600,
              margin: '$80 auto'
            }}
            className="max-w-80 md:max-w-full"
          >
            <Title
              align="center"
              size="lg"
              css={{
                fontSize: isDesktop ? 35 : 25,
                lineHeight: '42px',
                fontWeight: 500
              }}
            >
              No se encontró ninguna posición con estos filtros de búsqueda
            </Title>
          </Stack>
        )
      )}
      {(filteredPositions.length === 0 ||
        filteredPositions.length < positions.length) &&
        !isFilteredInSearch &&
        positions.length > 0 && (
          <Button
            variant="text"
            css={{
              textDecoration: 'underline',
              fontSize: 18,
              fontWeight: 600,
              '&:hover': { border: 'none !important' },
              justifyContent: 'flex-start',
              padding: 0
            }}
            onClick={() => {
              setSelectedFilters(DEFAULT_FILTER_VALUES);
            }}
          >
            Resetear búsqueda
          </Button>
        )}
    </Container>
  );
};

export default SumateGrid;
