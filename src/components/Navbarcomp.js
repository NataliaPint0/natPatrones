import React, { Component } from 'react';
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';

class componentName extends Component {
    render() {
        return (
                 <div className="App">
                  <Navbar expand="lg" className="bg-body-tertiary">
                  <Container fluid>
                  <img
                          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjc2My00Ni5wbmc.png"
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                          alt="React Bootstrap logo"
                        />
        <Navbar.Brand  href="#">Actividad I | Glosario</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>
        );
    }
}

export default componentName;
