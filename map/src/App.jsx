import "leaflet/dist/leaflet.css";
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
          <div className=" listmap-aside d-none d-lg-block col-md-2 col-xl-3">
            <CardCamping />
            <CardCamping />
            <CardCamping />
            <CardCamping />
            <CardCamping />
            <CardCamping />
            <CardCamping />
            <CardCamping />
          </div>
          <div className=" col-md-2 col-xl-1"></div>
          <div className="p-0 col-12 col-md-8 col-xl-8">
            <Map />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
