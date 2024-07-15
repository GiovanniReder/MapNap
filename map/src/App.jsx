import "leaflet/dist/leaflet.css";
import Map from "./components/Map";
import CardCamping from "./components/CardCamping";
export default function App() {
  return (
    <>
      <CardCamping />
      <Map />
      <p>testo</p>
    </>
  );
}
