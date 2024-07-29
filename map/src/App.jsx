import "leaflet/dist/leaflet.css";
import "./css/App.css";
import Map from "./components/Map";
import CardCamping from "./components/CardCamping";
import NavbarMapNap from "./components/NavbarMapNap";
import Footer from "./components/Footer";
import InfoCamp from "./components/InfoCamp";
import Homepage from "./components/Homepage";
import CityForm from "./components/CityForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarMapNap />
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/Map"
                element={
                  <>
                    <CityForm />
                    <div className="aside-container d-none d-md-block col-md-4 col-xl-4">
                      <CardCamping />
                    </div>
                    <div className="p-0 col-12 col-md-8 col-xl-8">
                      <Map />
                    </div>
                  </>
                }
              />
              <Route path="/Info/:campingId" element={<InfoCamp />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
