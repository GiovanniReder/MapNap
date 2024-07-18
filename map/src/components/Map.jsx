import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: "../assets/redMarker.png", // Assicurati di mettere il percorso corretto
  iconSize: [38, 38], // size of the icon
});

// custom cluster icon
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
        {/* WATERCOLOR CUSTOM TILES */}
        {/* <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
        /> */}
        {/* GOOGLE MAPS TILES */}
        {/* <TileLayer
          attribution="Google Maps"
          // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
          // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
          url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        /> */}

        <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
          {/* Mapping through the markers */}
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}

          {/* Hard coded markers */}

          {/* <Marker position={[43.8017, 7.7457]} icon={customIcon}>
            <Popup>This is popup 1</Popup>
          </Marker> */}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
