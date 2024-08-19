import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icona.png";

import "../css/NavbarMapNap.css";
import Login from "./Login";

function NavbarMapNap() {
  return (
    <>
      <Navbar className="navbarContainer ms-2">
        <Container>
          <Navbar.Brand className="d-flex" href="/">
            <img src={logo} width="30" height="30" className="logoSito d-inline-block align-top" alt="MapNapLogo" />
            <p className="text-white m-0">MapNap</p>
          </Navbar.Brand>
        </Container>
        <Login />
      </Navbar>
    </>
  );
}

export default NavbarMapNap;
