import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/InfoCamp.css";
import { useParams } from "react-router-dom";

const InfoCamp = () => {
  const [camping, setCamping] = useState(null);
  const [error, setError] = useState(null);
  const { campingId } = useParams();

  useEffect(() => {
    const fetchCamping = async () => {
      try {
        console.log(campingId);
        const response = await fetch(`http://localhost:3001/camp/${campingId}`, {
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
        setCamping(data);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      }
    };

    fetchCamping();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!camping) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div key={camping.id} className="InfoContainer mb-5">
        <Card.Body>
          <h2 className="fs-3 text-white">{camping.name}</h2>
          <img style={{ maxWidth: "70%" }} src={camping.image} className="imageStyle" />
          <p className="text-white  my-5">{camping.description}</p>
        </Card.Body>
      </div>
    </div>
  );
};

export default InfoCamp;
