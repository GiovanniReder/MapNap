import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Setting = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    surname: "",
    avatar: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!userId || !token) {
      console.error("User ID or token is missing from localStorage.");
    }
  }, [userId, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvatarUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3001/utenti/${userId}/avatar`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ url: userData.avatar }),
      });

      if (!response.ok) {
        throw new Error("Errore nell'aggiornamento dell'avatar");
      }

      const data = await response.json();

      console.log("Risposta dell'endpoint avatar:", data);
      const avatarUrl = data.avatar; // Prendi direttamente l'URL dalla risposta

      console.log("Avatar aggiornato con successo: ", avatarUrl);
    } catch (error) {
      console.error("C'è stato un errore nell'aggiornamento dell'avatar: ", error);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/utenti/${userId}/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Errore nella risposta da parte del Network");
      }

      const data = await response.json();
      console.log("Profilo aggiornato con successo: ", data);

      await handleAvatarUpdate();

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("C'è stato un errore nell'aggiornamento del profilo: ", error);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };

  return (
    <div className="settings">
      <h2 className="text-white my-5">Modifica il tuo profilo</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label className="text-white my-2">Nome utente</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci un nuovo nome utente"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="text-white my-2">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="text-white my-2">Inserisci la tua password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className="text-white my-2">Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il tuo nome"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="surname">
          <Form.Label className="text-white my-2">Cognome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il tuo cognome"
            name="surname"
            value={userData.surname}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="avatar">
          <Form.Label className="text-white my-2">Avatar</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci l'URL del nuovo avatar"
            name="avatar"
            value={userData.avatar}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button className="bg-success border-0 my-3" variant="primary" type="submit">
          Aggiorna Profilo
        </Button>
      </Form>

      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          Profilo aggiornato con successo 🎉, effettua nuovamente il login con i nuovi dati per visualizzare le
          modifiche.
        </Alert>
      )}
      {showError && (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          errore nell&rsquo;aggiornamento dell&rsquo;avatar. Riprovare.
        </Alert>
      )}
    </div>
  );
};

export default Setting;
