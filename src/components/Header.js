import React from "react";
import { Form, FormControl, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import adminInit from "../assets/AdminInit.png";
import Auth from "../utils/Auth";

const Header = () => {
  const navigate = useNavigate();

  const logOut = () => {
    try {
      alert("success");
      Auth.logOut();
      navigate("/sign-in");
    } catch (error) {
      alert("failed");
      console.log(error);
    }
  };

  return (
    <div className="header">
      <Navbar className="navbar" variant="light" bg="white">
        <Container className="container-header">
          <Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="nav-form" aria-label="Search" />
              <button>Search</button>
            </Form>
            <img src={adminInit} alt="adminaccount" />
            <DropdownButton id="dropdown-basic-button" title="Admin">
              <Dropdown.Item>
                <button onClick={logOut}>Log Out</button>
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
