import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CardCamping.css";

const CardCamping = () => {
  const [campings, setCampings] = useState([]);

  useEffect(() => {
    const fetchCampings = async () => {
      try {
        const response = await fetch("http://localhost:3001/camp", {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjE2NDYyMDEsImV4cCI6MTcyMjI1MTAwMSwic3ViIjoiZmU3MjIzNDYtNjQ2Yy00NWM3LTgxMDUtOGNjM2MyODZlYWQ1In0.2keT0kuWquaWehxddNoUNb9oKN_--ww0Cl-bfP1xUDM",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCampings(data.content);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchCampings();
  }, []);

  return (
    <div>
      {campings.map((camping) => (
        <Card key={camping.id} className="border mb-2 border-2 border-success" style={{ width: "19rem" }}>
          <Card.Img
            variant="top"
            src="https://www.habitante.it/wp-content/uploads/2019/07/shutterstock_649280029-1-e1562258471502.jpg"
            className="imageStyle"
          />
          <Card.Body>
            <Card.Img
              className="logoStyle bg-white rounded rounded-pill border border-4 border-white"
              variant="top"
              src="https://images.vexels.com/media/users/3/128996/isolated/preview/05b6f24fdd179e6be9df30522d2843f9-vintage-camping-rounded-seal.png"
            />
            <Card.Title className="fs-6">{camping.name}</Card.Title>
            <Card.Text>{camping.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardCamping;
