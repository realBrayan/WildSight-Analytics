// import { useState } from "react";

// // could have done this in a different way without returning the get position function for use in the app component but we needed to for the on click.
// function useGeolocation() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [position, setPosition] = useState({});
//   const [error, setError] = useState(null);

//   // const { lat, lng } = position; // some destructuring

//   function getPosition() {
//     // guard clause for browser not supporting geolocation
//     if (!navigator.geolocation)
//       return setError("Your browser does not support geolocation");

//     // set loading state to true
//     setIsLoading(true);

//     // call api function to get current position
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         // set position state based on position returned by api
//         setPosition({
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude,
//         });
//         // set loading state to false
//         setIsLoading(false);
//       },
//       // handle error by setting the error message, setting loading to false
//       (error) => {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     );
//   }

//   // we don't need the setter functions for these states just the values as this custom hook already manages the setting
//   return { position, error, isLoading, getPosition };
// }
