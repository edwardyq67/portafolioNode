import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import Proyectos from "../paginas/Proyectos";
const Navbart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          SOBRE MI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link variant="primary" onClick={handleShow}>
              Proyectos
            </Nav.Link>
            <Nav.Link as={Link} to="/contactame">
              Contactame
            </Nav.Link>
            <Offcanvas style={{ background: 'rgb(35, 65, 65)'}}show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{margin: "auto",color:'rgb(127, 198, 255)',fontSize:'1.7em' }}>
                  PROYECTOS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Proyectos />
              </Offcanvas.Body>
            </Offcanvas>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbart;
