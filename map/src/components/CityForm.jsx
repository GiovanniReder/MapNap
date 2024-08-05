import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CampingContext } from "./CardCamping";

function CityForm() {
  // let { campings } = useContext(CampingContext);
  const { search } = useContext(CampingContext);

  return (
    <Form>
      <Form.Group className="mb-4 d-flex" controlId="formBasicEmail">
        <Form.Control
          onKeyDownCapture={($event) => search($event)}
          type="text"
          placeholder="Cerca i campeggi in una specifica città"
        />
        <Button className="ms-3 border" variant="success" type="submit">
          <a href="/Map">Cerca</a>
        </Button>
      </Form.Group>
    </Form>
  );
}

export default CityForm;
