import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [loc, setLoc] = useState({
    load: false,
    coordinates: { lat: "", lon: "" },
  });

  const onSuccess = (l) => {
    setLoc({
      load: true,
      coordinates: {
        lat: l.coords.latitude,
        lon: l.coords.longitude,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setLoc((state) => ({
        ...state,
        load: true,
      }));
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess);
    }
  }, []);

  return loc;
};

export default useGeolocation;
