import { useEffect, useState, createContext, useContext } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CardCamping.css";
import { useNavigate } from "react-router-dom";

export const CampingContext = createContext();

// eslint-disable-next-line react/prop-types
export const CampingProvider = ({ children }) => {
  let [campings, setCampings] = useState([]);
  let [filteredCampings, setFilteredCampings] = useState([]);
  let [isAuthenticated, setIsAuthenticated] = useState(true);

  const search = (event) => {
    const query = event.target.value.toLowerCase();

    if (!query) {
      setCampings(campings);
      return;
    }

    const results = campings.filter((camping) => camping.place.toLowerCase().startsWith(query));

    setFilteredCampings(results);

    if (results.length === 0 || campings.every((x) => !x.place.toLowerCase().includes(query))) {
      setFilteredCampings(campings);
    }
  };

  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCampings = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found in local storage.");
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
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCampings(data.content);
        setFilteredCampings(data.content);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Fetch error:", error);
        setIsAuthenticated(false);
      }
    };

    fetchCampings();
  }, [api]);

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
      <div className="text-center">
        <h2 className="text-white">Effettua il Login per visualizzare i campeggi e ricarica la pagina.</h2>
      </div>
    );
  }

  return (
    <div>
      {filteredCampings.map((camping) => (
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
      ))}
      <br />
    </div>
  );
};

export default CardCamping;
