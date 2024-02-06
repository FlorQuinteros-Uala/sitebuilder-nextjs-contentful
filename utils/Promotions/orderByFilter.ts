enum OrderByOptions {
  Recent = 'Más reciente',
  Discount = 'Mayor descuento'
}

const OrderByFilter = [
  {
    filterTitle: 'Ordenar por: ',
    options: [
      {
        label: 'Más reciente',
        name: 'orderBy',
        type: 'radio'
      },
      {
        label: 'Mayor descuento',
        name: 'orderBy',
        type: 'radio'
      }
    ]
  }
];

export { OrderByFilter, OrderByOptions };
