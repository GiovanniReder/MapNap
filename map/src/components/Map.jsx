import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import markerPng from "../assets/redMarker.png"; // Usa import invece di require

// crea icona personalizzata
const customIcon = new Icon({
  iconUrl: markerPng,
  iconSize: [38, 38], // dimensione dell'icona
});

// icona cluster personalizzata
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

// markers
const markers = [
  {
    geocode: [43.8017, 7.7457],
    popUp: "Camping Villaggio dei Fiori",
  },
  {
    geocode: [43.8442, 7.908],
    popUp: "Camper Village",
  },
  {
    geocode: [43.8658, 7.9638],
    popUp: "Camping The Persian",
  },
];

const Map = () => {
  return (
    <div className="map-container">
      <MapContainer center={[43.819825, 7.774883]} zoom={13} className="map-container">
        {/* OPEN STREEN MAPS TILES */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
          {/* Mapping attraverso i markers */}
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
