import Button from "react-bootstrap/Button";
import "../css/Homepage.css";
import CityForm from "./CityForm";

import HomepageCarousel from "./HomepageCarousel";
function Homepage() {
  return (
    <>
      <div className=" d-flex  justify-content-center  ">
        <h2 className="text-white mb-3 fs-1">Cerca i migliori campeggi</h2>
      </div>
      <p className=" d-flex  justify-content-center text-white mt-0 mb-5">
        dove passare notti incredibili con la tua tenda, il tuo van o camper.
      </p>
      <CityForm />

      <div className="d-flex  justify-content-center">
        <h2 className="mx-auto text-white">Oppure clicca qui sotto per andare direttamente alla mappa</h2>
      </div>
      <div className="d-flex my-4  justify-content-center">
        <Button
          style={{
            width: "22%",
            background:
              "linear-gradient(180deg, rgba(220,129,36,1) 0%, rgba(242,229,25,1) 100%, rgba(255,255,255,1) 100%) ",
          }}
          className="mb-4"
          variant="light"
        >
          <a href="/Map" className="custom-link text-white">
            Vai alla mappa
          </a>
        </Button>
      </div>

      <HomepageCarousel />
    </>
  );
}

export default Homepage;
