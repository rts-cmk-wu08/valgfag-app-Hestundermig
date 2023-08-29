// import React, { useState, useEffect } from "react";
// import { Map, NavigationControl, Marker, GeolocateControl } from "react-map-gl";

// const MyMap = () => {
//   const [tidligereHastighed, setTidligereHastighed] = useState(0  );

//   const successCallback = (position) => {
//     const nuværendeHastighed = position.coords.speed || 0;

//     if (tidligereHastighed === 0 && nuværendeHastighed > 0) {
//       sendNotification("Du begynder at bevæge dig, pas på!!!");
//     }

//     setTidligereHastighed(nuværendeHastighed);
//   };

//   const errorCallback = (error) => {
//     console.error("Fejl hos geolocation:", error);
//   };

//   const sendNotification = (message) => {
//     if ("Notification" in window) {
//       Notification.requestPermission().then((permission) => {
//         if (permission === "granted") {
//           new Notification("Ny hastighed", {
//             body: message,
//           });
//         }
//       });
//     }
//   };

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//   }, []);

//   return (
//     <Map
//       mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
//       style={{ width: "100vw", height: "50vh" }}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//       initialViewState={{
//         latitude: 55.7060378,
//         longitude: 12.5142235,
//         zoom: 16,
//       }}
//     >
//       <NavigationControl />

//       <Marker latitude={55.7060378} longitude={12.5142235} />

//       <GeolocateControl
//         trackUserLocation={true}
//         positionOptions={{ enableHighAccuracy: true }}
//         showAccuracyCircle={true}
//         auto
//       />
//     </Map>
//   );
// };

// export default MyMap;









import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { Map, NavigationControl, Marker, GeolocateControl } from "react-map-gl";
import style from "../style.css";

mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MyMap = () => {
  const [userPosition, setUserPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserPosition({ latitude, longitude });
        },
        error => {
          console.error(error);
        }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }
  }, []);

  useEffect(() => {
    if (userPosition) {
      sendNotification();
    }
  }, [userPosition]);

  function sendNotification() {
    if ("Notification" in window) {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification("Bevægelse registreret", {
            body: "Du har bevæget dig!",
          });
        }
      });
    }
  }

  return (
    <Map
      maplib={import("mapbox-gl")}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      style={{ width: "100vw", height: "50vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      initialViewState={{
        latitude: 55.7060378,
        longitude: 12.5142235,
        zoom: 16,
      }}
    >
      <NavigationControl />
      {userPosition && (
        <Marker
          latitude={userPosition.latitude}
          longitude={userPosition.longitude}
          color="blue"
        />
      )}
      <GeolocateControl
        trackUserLocation={true}
        positionOptions={{ enableHighAccuracy: true }}
        showAccuracyCircle={true}
        auto
      />
    </Map>
  );
};

export default MyMap;