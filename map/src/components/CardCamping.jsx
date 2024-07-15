import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
};
const logoStyle = {
  maxWidth: "10%",
  height: "auto",
  borderRadius: "8px",
};

const CardCamping = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://www.habitante.it/wp-content/uploads/2019/07/shutterstock_649280029-1-e1562258471502.jpg"
        style={imageStyle}
      />
      <Card.Body>
        <Card.Img
          variant="top"
          src="https://images.vexels.com/media/users/3/128996/isolated/preview/05b6f24fdd179e6be9df30522d2843f9-vintage-camping-rounded-seal.png"
          style={logoStyle}
        />
        <Card.Title>La Campeggia</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequatur vitae iusto maiores
          accusantium placeat quis nemo mollitia, quidem excepturi dignissimos molestias hic assumenda quas ratione
          numquam corporis earum cum?
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCamping;
