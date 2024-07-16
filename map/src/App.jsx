import "leaflet/dist/leaflet.css";
import Map from "./components/Map";
import CardCamping from "./components/CardCamping";
export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" d-none d-lg-block col-md-2 col-xl-3">
            <CardCamping />
          </div>
          <div className=" col-md-2 col-xl-1"></div>
          <div className="p-0 col-12 col-md-8 col-xl-8">
            <Map />
          </div>
          <p>testo</p>
        </div>
      </div>
    </>
  );
}
