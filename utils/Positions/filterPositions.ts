export enum FILTERS {
  LOCATION = 'location',
  DEPARTMENT = 'department'
}

export type Position = {
  name: string;
  department: string | null;
  experience_level: string;
  uid: string;
  location: string;
  company_name: string;
  position_url: string;
  categories: object[];
};

const FILTERS_MATCH_FNS: {
  [key in FILTERS]: (p: Position, v: string) => boolean;
} = {
  [FILTERS.LOCATION]: (p, v) => p['location'] === v,
  [FILTERS.DEPARTMENT]: (p, v) => p['department'] === v
};

export const filterPositions = (
  positions: Position[],
  filters: { [key in FILTERS]: string | null }
) =>
  positions.filter((position) => {
    // With every position, search value is null or use the fn to search with that property
    return Object.entries(filters).every(
      ([k, v]) => v === null || FILTERS_MATCH_FNS[k](position, v)
    );
  });
