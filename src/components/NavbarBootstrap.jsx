import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarBootstrap = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="text-lg p-3"
      style={{ fontSize: "24px" }}
    >
      <Container fluid>
        <Navbar.Brand href="#" style={{ fontSize: "34px" }}>
          Carousel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>

            <Nav.Link href="#" disabled>
              Disabled
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 form-control-lg"
              aria-label="Search"
            />
            <Button variant="outline-success btn-lg">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarBootstrap;
