import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import serverApi from "../API/serverApi";

export default function MapsNavigation() {
  const { id } = useParams();
  const [dealerPosition, setDealerPosition] = useState({});
  const [userPosition, setUserPosition] = useState({});
  const [directions, setDirection] = useState(null);

  const directionCallback = (response) => {
    if (response !== null) {
      if (response.status === "OK") {
        setDirection(response);
      }
    }
  };

  const successCallback = (position) => {
    setUserPosition(position.coords);
  };

  const errorCallback = (error) => {};

  useEffect(() => {
    //get user location
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    //get dealer location
    serverApi
      .get(`/cars/${id}`)
      .then((res) => {
        setDealerPosition(res.data.Dealer);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <LoadScript googleMapsApiKey={"AIzaSyBjlQ0LbPIFIH3rExuCRIFoDifRyNAyenw"}>
        <GoogleMap
          mapContainerStyle={{ width: "100vw", height: "100vh" }}
          center={{ lat: userPosition.latitude, lng: userPosition.longitude }}
          zoom={10}
        >
          <DirectionsService
            options={{
              destination: dealerPosition.storeAddress,
              origin: {
                lat: userPosition.latitude,
                lng: userPosition.longitude,
              },
              travelMode: "DRIVING",
            }}
            callback={directionCallback}
          />

          {directions !== null && (
            <DirectionsRenderer directions={directions} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
