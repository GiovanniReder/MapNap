import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icona.png";
import Button from "react-bootstrap/Button";
import "../css/NavbarMapNap.css";

function NavbarMapNap() {
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
              <Button className="text-white" style={{ backgroundColor: "#009074" }} variant="border-0">
                Username
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMapNap;
