import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

function MiniMap({ onClickRedirect }) {
  const [position, setPosition] = useState([26.0, -80.7]);
  let navigate = useNavigate();

  // useEffect(() => {
  //   function getPosition() {
  //     navigator?.geolocation?.getCurrentPosition(loadMap, function () {
  //       alert("Could not get your position.");
  //     });
  //   }

  //   function loadMap(position) {
  //     console.log(position.coords.latitude, position.coords.longitude);
  //     setPosition([position.coords.latitude, position.coords.longitude]);
  //   }

  //   getPosition();
  // }, []);

  // path of python test
  const coordinates = [
    { latitude: 26.09625490696853, longitude: -81.54052734375 },
    { latitude: 26.49024045886963, longitude: -81.80419921875001 },
    { latitude: 26.765230565697482, longitude: -81.57348632812501 },
    { latitude: 26.853479438420024, longitude: -81.74926757812501 },
    { latitude: 26.95145308349826, longitude: -81.71630859375001 },
    { latitude: 27.283925600229757, longitude: -81.71630859375001 },
    { latitude: 27.52775820686191, longitude: -81.82617187500001 },
    { latitude: 27.664068965384516, longitude: -81.52954101562501 },
    { latitude: 27.518015241965667, longitude: -81.38671875000001 },
    { latitude: 27.556981920338316, longitude: -81.14501953125001 },
    { latitude: 27.72243591897343, longitude: -81.00219726562501 },
    { latitude: 27.877928333679495, longitude: -80.77148437500001 },
    { latitude: 28.091366281406945, longitude: -81.09008789062501 },
    { latitude: 28.23664944401447, longitude: -80.96923828125001 },
    { latitude: 28.34306490482549, longitude: -81.02416992187501 },
    { latitude: 28.729130483430154, longitude: -80.91430664062501 },
    { latitude: 29.0273547804184, longitude: -81.16699218750001 },
    { latitude: 29.065772888415406, longitude: -81.38671875000001 },
    { latitude: 28.969700808694157, longitude: -81.49658203125 },
    { latitude: 29.209713225868185, longitude: -81.61743164062501 },
    { latitude: 29.420460341013158, longitude: -81.52954101562501 },
    { latitude: 29.544787796199465, longitude: -81.32080078125001 },
    { latitude: 29.80251790576445, longitude: -81.47460937500001 },
    { latitude: 30.002516938570686, longitude: -81.73828125000001 },
    { latitude: 29.716681287231072, longitude: -81.84814453125001 },
    { latitude: 30.192618218499273, longitude: -81.72729492187501 },
    { latitude: 30.477082932837682, longitude: -81.88110351562501 },
    { latitude: 30.675715404167743, longitude: -81.73828125000001 },
  ];

  // function MapClickHandler() {
  //   useMapEvents({
  //     click: (e) => {
  //       const { lat, lng } = e.latlng;
  //       console.log(`Latitude: ${lat}, Longitude: ${lng}`);
  //     },
  //   });

  //   return null;
  // }

  function ClickRedirect() {
    useMapEvents({
      click: () => {
        console.log("Hello");
        navigate("/speciesMap");
      },
    });
  }

  return (
    <>
      {position ? (
        <>
          {" "}
          <MapContainer
            center={position}
            zoom={7}
            scrollWheelZoom={false}
            className="h-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <MapClickHandler /> */}
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>

            {/* on click redirect handler for the map */}
            {onClickRedirect && <ClickRedirect />}

            {/* show all the coordinates on the map */}
            {coordinates.map((coordinate, index) => {
              return (
                <Marker
                  key={index}
                  position={[coordinate.latitude, coordinate.longitude]}
                  opacity={`${index === 0 ? 1 : 0.6}`}
                >
                  <Popup>
                    Python 1 <br /> {coordinate.latitude.toFixed(4)},{" "}
                    {coordinate.longitude.toFixed(4)}
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MiniMap;
