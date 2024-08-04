import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CityForm() {
  return (
    <Form>
      <Form.Group className="mb-4 d-flex" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Cerca i campeggi in una specifica città" />
        <Button className="ms-3 border" variant="success" type="submit">
          Cerca
        </Button>
      </Form.Group>
    </Form>
  );
}

export default CityForm;
