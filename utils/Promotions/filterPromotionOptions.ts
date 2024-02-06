import type { Promotion } from 'types/TypesPromotion';

interface Props {
  title: string;
  filters: {
    filterTitle: string;
    name: string;
    options: {
      label: string;
      name: string;
      type: 'checkbox' | 'radio';
    }[];
  }[];
}

const inOrderDays = (arr: string[]) => {
  const sortedDaysOptions = [
    'Todos los días',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
  ];
  return sortedDaysOptions.filter((each) => arr.includes(each));
};

export const filterPromotionOptions = (promotions: Promotion[]) => {
  const paymentMethods = promotions.filter((p) => !p.payment.pointsPayment);

  const generateOptions = (key: string) => {
    let arr = [];

    if (key === 'payment') {
      arr = Array.from(
        new Set(
          paymentMethods
            .filter((p) => !p.payment.pointsPayment)
            .map(
              (p) =>
                p.payment.pointsPayment === false &&
                p.payment.paymentMethods.methods
            )
            .flat()
        )
      );
    } else {
      arr = Array.from(new Set(promotions.map((p) => p[key]).flat()));
    }

    return arr.some((el) => el === null) ? [] : arr;
  };

  const filtro: Props = {
    title: 'Filtrar',
    filters: [
      {
        filterTitle: 'Tipo de promoción',
        name: 'promotionType',
        options: generateOptions('promotionType').map((o) => ({
          label: o,
          name: 'promotionType',
          type: 'radio'
        }))
      },
      {
        filterTitle: 'Tipo de comercio',
        name: 'commerceType',
        options: generateOptions('commerceType').map((o) => ({
          label: o,
          name: 'commerceType',
          type: 'checkbox'
        }))
      },
      {
        filterTitle: 'Día de la semana',
        name: 'days',
        options: inOrderDays(generateOptions('days')).map((o) => ({
          label: o,
          name: 'days',
          type: 'checkbox'
        }))
      },
      {
        filterTitle: 'Medio de pago',
        name: 'payment',
        options: generateOptions('payment').map((o) => ({
          label: o,
          name: 'payment',
          type: 'checkbox'
        }))
      },
      {
        filterTitle: 'Nivel de puntos',
        name: 'level',
        options: generateOptions('level').map((o) => ({
          label: `Nivel ${String(o)}`,
          name: 'level',
          type: 'checkbox'
        }))
      },
      {
        filterTitle: 'Rubro',
        name: 'categories',
        options: generateOptions('categories').map((o) => ({
          label: o,
          name: 'categories',
          type: 'checkbox'
        }))
      },
      {
        filterTitle: 'Ubicación',
        name: 'locations',
        options: generateOptions('locations').map((o) => ({
          label: o,
          name: 'locations',
          type: 'radio'
        }))
      }
    ]
  };

  filtro.filters = filtro.filters.filter((filter) => filter.options.length > 0);

  return filtro;
};
