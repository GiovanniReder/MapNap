import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Registrati
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserisci i tuoi dati</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Inserisci il tuo username" />
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email </Form.Label>
                <Form.Control type="password" placeholder="Inserisci la tua email" autoFocus />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="inserisci la tua password" />
                <Form.Label>Nome </Form.Label>
                <Form.Control type="text" placeholder="Inserisci il tuo nome" autoFocus />
                <Form.Label>Cognome </Form.Label>
                <Form.Control type="text" placeholder="Inserisci il tuo cognome" autoFocus />
              </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="success" onClick={handleClose}>
            Registrati
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;
