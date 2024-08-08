import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Register from "./Register";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../css/Login.css";

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserName = localStorage.getItem("userName");
    const storedAvatar = localStorage.getItem("avatar");

    if (storedToken && storedUserName) {
      setUserName(storedUserName);
      setAvatar(storedAvatar);
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login fallito. Verifica le tue credenziali.");
      }

      const data = await response.json();
      console.log("Response data:", data);

      const token = data.accessToken;
      const name = data.name;
      const id = data.userId;
      const avatar = data.avatar;
      localStorage.setItem("token", token);
      localStorage.setItem("userName", name);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("userId", id);
      console.log("userId: ", id);
      console.log("token: ", token);
      console.log("avatar: ", avatar);
      console.log("name: ", name);
      setUserName(name);
      setAvatar(avatar);
      console.log("Token e avatar salvati correttamente nel local storage", token, avatar);

      handleClose();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {userName ? (
        <DropdownButton
          id="dropdown-basic-button dropdownLogin"
          drop="start"
          title={
            <div className="d-flex align-items-center  ">
              <img
                src={avatar}
                alt=""
                style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px" }}
              />
              {userName}
            </div>
          }
          className="me-5 "
        >
          <Dropdown.Item href="/Settings">Impostazioni</Dropdown.Item>
          <Dropdown.Item href="#/create-camp">Crea un campeggio</Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              localStorage.clear();
              setUserName("");
              setAvatar("");
            }}
          >
            Esci
          </Dropdown.Item>
        </DropdownButton>
      ) : (
        <Button className="me-5" variant="success" onClick={handleShow}>
          Login
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserisci i tuoi dati</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci la tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Inserisci la tua password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="danger" onClick={handleClose}>
              Annulla
            </Button>
            <Button variant="success" type="submit">
              Login
            </Button>

            <Register />
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
