type PositionData = {
  name: string;
  department: string | null;
  location: string;
  details: object[];
  categories: object[];
};

export const getPositionsData = async (
  id?: string
): Promise<PositionData[]> => {
  try {
    const res = await fetch(
      // TODO: reemplazar token por variable de entorno cuando ya se haya cargado en el proyecto
      `https://www.comeet.co/careers-api/2.0/company/54.00B/positions?token=45B15C715C78B6273322D88B6D111A22D11&details=true`
    );

    if (!res.ok) {
      throw new Error(`Fetch failed. ${res.status} ${res.statusText}`);
    }
    //TODO: reemplazar AR por MX en la condición
    const data = await res
      .json()
      .then((d) => d.filter((d) => d.location.country === 'AR'));

    const info = id !== undefined ? data.filter((d) => d.uid === id) : data;

    return info.reduce(
      (acc, { name, uid, department, location, details, categories }) => {
        acc.push({
          id: uid,
          name: name,
          department: department,
          location: location.name,
          details: details,
          categories: categories
        });
        return acc;
      },
      []
    );
  } catch (error) {
    return error;
  }
};
