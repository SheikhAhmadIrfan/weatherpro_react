import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { useState } from "react";

export const Custommap = (props) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const onMarkerClick = (props, marker) => {
    setSelectedPlace(marker.name);
  };

  const onInfoWindowClose = () => {
    setSelectedPlace(null);
  };

  return (
    <Map google={props.google} zoom={14}>
      <Marker onClick={onMarkerClick} name={"london"} />

      <InfoWindow onClose={onInfoWindowClose} visible={!!selectedPlace}>
        <div>
          <h1>{selectedPlace}</h1>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCZQdWZWsNyakL30EbvVherjO4c9HcqFc8",
})(Custommap);
