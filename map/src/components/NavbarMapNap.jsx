import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icona.png";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Login from "../components/Login";

import "../css/NavbarMapNap.css";

function NavbarMapNap() {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      userName,
      email,
      password,
      name,
      surname,
    };

    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Registrazione avvenuta con successo: ", data);

      handleClose();
    } catch (error) {
      console.error("C'è stato un errore nella registrazione: ", error);
    }
  };

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
                  <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="registerUserName">
                      <Form.Label>Nome utente</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Inserisci nome utente"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="registerEmail">
                      <Form.Label>Inserisci il tuo indirizzo email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="registerPassword">
                      <Form.Label>Inserisci la tua password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="registerName">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Inserisci il tuo nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="registerSurname">
                      <Form.Label>Cognome</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Inserisci il tuo cognome"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Registrati
                    </Button>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Chiudi
                  </Button>
                  <Login />
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
