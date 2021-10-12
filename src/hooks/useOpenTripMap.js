import { useState, useEffect } from "react";

const useOpenTripMap = () => {
  const [payload, setPayload] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Vars
  const URL = `https://api.opentripmap.com/0.1/en/places/radius?radius=1500&lon=-97.74306&lat=30.26715&kinds=historic_districts&apikey=${process.env.REACT_APP_OPEN_TRIP_MAP_API_KEY}`;

  useEffect(() => {
    window
      .fetch(URL)
      .then((response) => response.json())
      .then((data) => setPayload(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [URL]);

  return { error, isLoading, payload };
};

export default useOpenTripMap;
