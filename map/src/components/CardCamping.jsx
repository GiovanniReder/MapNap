import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CardCamping.css";

const CardCamping = () => {
  return (
    <Card className="border  border-2 border-success" style={{ width: "19rem" }}>
      <Card.Img
        variant="top"
        src="https://www.habitante.it/wp-content/uploads/2019/07/shutterstock_649280029-1-e1562258471502.jpg"
        className="imageStyle"
      />
      <Card.Body>
        <div style={{ display: "flex" }}>
          <Card.Img
            className="logoStyle bg-white rounded rounded-pill border border-4 border-white"
            variant="top"
            src="https://images.vexels.com/media/users/3/128996/isolated/preview/05b6f24fdd179e6be9df30522d2843f9-vintage-camping-rounded-seal.png"
          />
          <Card.Title className="ms-1">La Campeggia</Card.Title>
        </div>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequatur vitae iusto maiores accus
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCamping;
