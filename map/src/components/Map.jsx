import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import markerPng from "../assets/redMarker.png";

const customIcon = new Icon({
  iconUrl: markerPng,
  iconSize: [38, 38],
});

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

const token = import.meta.env.VITE_BEARER_TOKEN;
const api = import.meta.env.VITE_API_URL;
console.log(token);
console.log(api);

const Map = () => {
  const [campings, setCampings] = useState([]);

  useEffect(() => {
    const fetchCampings = async () => {
      try {
        const response = await fetch(`${api}/camp`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        setCampings(data.content);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchCampings();
  }, []);

  return (
    <div className="map-container">
      <MapContainer center={[43.819825, 7.774883]} zoom={13} className="map-container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
          {campings.map((camping) => (
            <Marker key={camping.id} position={[camping.latitude, camping.longitude]} icon={customIcon}>
              <Popup>
                <strong>{camping.name}</strong>
                <br />
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
