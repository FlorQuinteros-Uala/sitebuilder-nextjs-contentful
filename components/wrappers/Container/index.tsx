import { Container as ContainerAbra } from '@uala/abra';
import PromotionsGrid from 'components/Promociones/PromotionsGrid';
import { formatPromotions } from 'utils/Promotions';

export const Container = (fields) => {
  if (fields.promociones) {
    return (
      <PromotionsGrid
        title={fields.ttulo}
        promotions={formatPromotions(fields.promociones)}
        searchbar={fields.buscador}
        filters={{
          orderBy: fields.filtroDeOrdenVisible,
          filter: fields.filtroVisible
        }}
      />
    );
  }

  return <ContainerAbra layout="100"></ContainerAbra>;
};
