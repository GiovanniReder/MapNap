import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Register from "./Register";

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
      const avatar = data.avatar;
      localStorage.setItem("token", token);
      localStorage.setItem("userName", name);
      localStorage.setItem("avatar", avatar);

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
      <Button className="me-5 d-flex" variant="success" onClick={handleShow}>
        {userName ? (
          <>
            <img
              src={avatar}
              alt=""
              style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px" }}
            />
            {userName}
          </>
        ) : (
          "Login"
        )}
      </Button>

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
