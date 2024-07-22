import "leaflet/dist/leaflet.css";
import "./css/App.css";
import Map from "./components/Map";
import CardCamping from "./components/CardCamping";
import NavbarMapNap from "./components/NavbarMapNap";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <NavbarMapNap />
      <div className="container">
        <div className="row">
          <div className="aside-container d-none d-md-block col-md-4 col-xl-4">
            <CardCamping />
          </div>

          <div className="p-0 col-12 col-md-8 col-xl-8">
            <Map />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
