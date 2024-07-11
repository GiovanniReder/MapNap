import "../css/Map.css";
import { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export class Map extends Component {
  static propTypes = {};
  render() {
    // const position = [51.505, -0.09];
    return (
      <MapContainer className="mappaContainer" center={[45.197555, 7.7711483]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
  }
}

export default Map;
