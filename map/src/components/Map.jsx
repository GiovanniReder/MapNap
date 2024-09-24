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

const api = import.meta.env.VITE_API_URL;

const Map = () => {
  const [campings, setCampings] = useState([]);
  console.log(campings);

  useEffect(() => {
    const fetchCampings = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found in local storage.");
        return;
      }

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

        if (data && Array.isArray(data)) {
          setCampings(data);
        } else if (data && data.content) {
          setCampings(data.content);
        } else {
          console.error("Formato dei dati inaspettato:", data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchCampings();
  }, []);

  return (
    <div className="map-container mb-5">
      <MapContainer center={[41.975014254668935, 12.6533157016664]} zoom={6} className="map-container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
          {campings && campings.length > 0 ? (
            campings.map((camping) => (
              <Marker key={camping.id} position={[camping.latitude, camping.longitude]} icon={customIcon}>
                <Popup>
                  <strong>{camping.name}</strong>
                  <br />
                </Popup>
              </Marker>
            ))
          ) : (
            <p>Caricamento campeggi...</p>
          )}
        </MarkerClusterGroup>
      </MapContainer>
      <br />
    </div>
  );
};

export default Map;
