import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/images/lms_logo.png";
import { IoHomeSharp } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function Header() {
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link to="/" className="logo-link">
          <img src={logo} width="80px" alt="logoLMS" />
          <span className="logo-text ms-2">
            Library Management System by Maca
          </span>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="gap-3">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              <IoHomeSharp /> Home
            </Link>
            <Link className="nav-link" to="/signup">
              <FaSignInAlt /> Sign Up
            </Link>
            <Link className="nav-link" to="/login">
              <MdOutlineAccountCircle /> Log In
            </Link>
            {/* <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
