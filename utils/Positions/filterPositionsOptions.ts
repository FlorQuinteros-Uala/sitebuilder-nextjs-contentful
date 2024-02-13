interface Props {
  filters: {
    filterTitle?: string;
    options: { label: string; name: string; type: 'checkbox' | 'radio' }[];
  }[];
}

function generateOptions(positions: [], key: string) {
  const arr = Array.from(new Set(positions.map((p) => p[key]).flat()));
  return arr.some((el) => el === null) ? [] : arr;
}

export const filterPositionsOptionsByArea = (positions: []) => {
  const Options = generateOptions(positions, 'department');
  const filtro: Props = {
    filters: [
      {
        options: Options.map((o) => ({
          label: o,
          name: 'department',
          type: 'radio'
        }))
      }
    ]
  };
  filtro.filters = filtro.filters.filter((filter) => filter.options.length > 0);
  return filtro;
};

export const filterPositionsOptionsByLocations = (positions: []) => {
  const Options = generateOptions(positions, 'location');
  const filtro: Props = {
    filters: [
      {
        options: Options.map((o) => ({
          label: o,
          name: 'location',
          type: 'radio'
        }))
      }
    ]
  };
  filtro.filters = filtro.filters.filter((filter) => filter.options.length > 0);
  return filtro;
};
