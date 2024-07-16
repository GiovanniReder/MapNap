import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icona.png";
import "../css/NavbarMapNap.css";

function NavbarMapNap() {
  return (
    <>
      <Navbar className="navbarContainer">
        <Container>
          <Navbar.Brand className="d-flex" href="#home">
            <img src={logo} width="30" height="30" className="logoSito d-inline-block align-top" alt="MapNapLogo" />
            <p className="text-white m-0">MapNap</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMapNap;
