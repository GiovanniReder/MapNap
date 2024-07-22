import { useEffect, useState } from "react";
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

const Map = () => {
  const [campings, setCampings] = useState([]);

  useEffect(() => {
    const fetchCampings = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const bearerToken = process.env.REACT_APP_BEARER_TOKEN;

        const response = await fetch(`${apiUrl}/camp`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${bearerToken}`,
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
        {/* OPEN STREET MAPS TILES */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
          {/* Mapping attraverso i campeggi ottenuti dalla fetch */}
          {campings.map((camping) => (
            <Marker key={camping.id} position={[camping.latitude, camping.longitude]} icon={customIcon}>
              <Popup>
                <strong>{camping.name}</strong>
                <br />
                {camping.description}
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
