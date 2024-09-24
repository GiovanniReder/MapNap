import { useEffect, useState, createContext, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../css/CardCamping.css";

export const CampingContext = createContext();

// eslint-disable-next-line react/prop-types
export const CampingProvider = ({ children }) => {
  let [campings, setCampings] = useState([]);
  let [filteredCampings, setFilteredCampings] = useState([]);
  let [isAuthenticated, setIsAuthenticated] = useState(true);

  const search = (event) => {
    const query = event.target.value.toLowerCase();

    if (!query) {
      setFilteredCampings(campings);
      return;
    }

    const results = campings.filter((camping) => camping.place.toLowerCase().startsWith(query));
    console.log(results);

    setFilteredCampings(results);

    if (results.length === 0) {
      setFilteredCampings(campings);
    }
  };

  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCampings = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Nessun token trovato nello storage locale.");
        setIsAuthenticated(false);
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
          throw new Error("La risposta di rete non è stata ok");
        }

        const data = await response.json();
        setCampings(data || []);
        setFilteredCampings(data || []);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Errore di fetch:", error);
        setIsAuthenticated(false);
        setFilteredCampings([]);
      }
    };
    fetchCampings();
  }, [api]);
  console.log(filteredCampings);
  return (
    <CampingContext.Provider value={{ campings, filteredCampings, search, isAuthenticated }}>
      {children}
    </CampingContext.Provider>
  );
};

const CardCamping = () => {
  const { filteredCampings, isAuthenticated } = useContext(CampingContext);

  const navigate = useNavigate();
  const handleClick = (camping) => {
    navigate(`/Info/${camping.id}`);
  };

  if (!isAuthenticated) {
    return (
      <div className="alert alert-warning bg-warning" role="alert">
        Esegui il login e ricarica la pagina per visualizzare correttamente i campeggi!!
      </div>
    );
  }

  if (!Array.isArray(filteredCampings)) {
    return null;
  }

  return (
    <div>
      {filteredCampings.length > 0 ? (
        filteredCampings.map((camping) => (
          <Card
            onClick={() => handleClick(camping)}
            key={camping.id}
            className="border mb-5 border-2 border-success"
            style={{ width: "90%" }}
          >
            <Card.Img variant="top" src={camping.image} className="imageStyle" />
            <Card.Body>
              <Card.Img
                className="logoStyle bg-white rounded rounded-pill border border-4 border-white"
                variant="top"
                src="https://images.vexels.com/media/users/3/128996/isolated/preview/05b6f24fdd179e6be9df30522d2843f9-vintage-camping-rounded-seal.png"
              />
              <Card.Title className="fs-5 ">{camping.name}</Card.Title>
              <Card.Text>{camping.description}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Nessun campeggio trovato.</p>
      )}
      <br />
    </div>
  );
};

export default CardCamping;
