export const useFetch = () => {
  //ESTA SECCION DEVUELVE INFORMACION SOBRE LAS AEREOLINEAS
  const urlAirlines =
    "https://airlines-by-api-ninjas.p.rapidapi.com/v1/airlines?iata=DL";
  const optionsAirlines = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "372604a2a3msh4ad4bb5624375dfp1ae88ejsn3a719ad332f1",
      "x-rapidapi-host": "airlines-by-api-ninjas.p.rapidapi.com",
    },
  };

  const fetchAirlinesData = async () => {
    try {
      const response = await fetch(urlAirlines, optionsAirlines);
      const result = await response.json();
      console.log(result[0].name);
    } catch (error) {
      console.error(error);
    }
  };

  //ESTA SECCION DEVUELVE LA INFORMACION SOBRE AEREOPUERTOS
  const urlAirports = "https://airport-info.p.rapidapi.com/airport?iata=EZE";
  const optionsAirports = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "372604a2a3msh4ad4bb5624375dfp1ae88ejsn3a719ad332f1",
      "x-rapidapi-host": "airport-info.p.rapidapi.com",
    },
  };

  const fetchAirportsData = async () => {
    try {
      const response = await fetch(urlAirports, optionsAirports);
      const result = await response.json();
      console.log(result.location);
      console.log(result.country);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    data,
    isLoading,
    error,
  };
};
