import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icona.png";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import "../css/NavbarMapNap.css";

function NavbarMapNap() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="navbarContainer">
        <Container>
          <Navbar.Brand className="d-flex" href="/">
            <img src={logo} width="30" height="30" className="logoSito d-inline-block align-top" alt="MapNapLogo" />
            <p className="text-white m-0">MapNap</p>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button style={{ backgroundColor: "#00926E" }} onClick={handleShow}>
                Login
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Esegui il login o registrati</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Inserisci il tuo indirizzo email</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" autoFocus />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                      <Form.Label>Inserisci la tua password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={handleClose}>
                    Registrati
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Chiudi
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Login
                  </Button>
                </Modal.Footer>
              </Modal>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMapNap;
