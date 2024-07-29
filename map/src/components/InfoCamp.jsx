import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/InfoCamp.css";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import markerPng from "../assets/redMarker.png";

const InfoCamp = () => {
  const [camping, setCamping] = useState(null);
  const [error, setError] = useState(null);
  const { campingId } = useParams();

  const customIcon = new Icon({
    iconUrl: markerPng,
    iconSize: [38, 38],
  });

  const createClusterCustomIcon = (cluster) => {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  const token = import.meta.env.VITE_BEARER_TOKEN;
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCamping = async () => {
      try {
        const response = await fetch(`${api}/camp/${campingId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCamping(data);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      }
    };

    fetchCamping();
  }, [campingId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!camping) {
    return <div>Loading...</div>;
  }

  const markers = [
    {
      geocode: [camping.latitude, camping.longitude],
      popUp: camping.name,
    },
  ];

  return (
    <div key={camping.id} className="InfoContainer mb-5">
      <div className="InfoContent">
        <Card.Body>
          <h2 className="fs-3 my-3 text-white">{camping.name}</h2>
          <img style={{ maxWidth: "60%" }} src={camping.image} alt={camping.name} />
          <p className="text-white my-5">{camping.description}</p>
          <div className="d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-geo-alt me-1"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <p className="text-white">Latitude: {camping.latitude}</p>
            <p className="text-white ms-5">{camping.address}</p>
          </div>

          <div className="d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-geo-alt me-1"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <p className="text-white">Longitude: {camping.longitude}</p>
            <p className="text-white ms-5"> {camping.place}</p>
          </div>
        </Card.Body>
      </div>
      <div style={{ width: "100px" }} className="MapContainer d-none d-md-block">
        <MapContainer center={[camping.latitude, camping.longitude]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default InfoCamp;
