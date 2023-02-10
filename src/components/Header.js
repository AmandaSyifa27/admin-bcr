import React, { useState, useEffect } from "react";
import { Form, FormControl, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import adminInit from "../assets/AdminInit.png";
import Auth from "../utils/Auth";
import APIOrder from "../apis/APIOrder.js";
// import { setCars } from "../store/features/searchCarSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { setPayload, searchPayloadSearchCars } from "../store/features/searchCarSlice.js";

const Header = () => {
  const navigate = useNavigate();
  const [car, setCar] = useState("");
  const [searchByName, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const { payload } = useSelector(searchPayloadSearchCars);

  const handleSearch = (e) => {
    dispatch(setPayload({ ...payload, name: e.target.value }));
    navigate("/list-cars");
    console.log(e.target.value);
  };

  const logOut = () => {
    try {
      alert("Logged Out");
      Auth.logOut();
      navigate("/sign-in");
    } catch (error) {
      alert("failed");
    }
  };

  return (
    <div className="header">
      <Navbar className="navbar" variant="light" bg="white">
        <Container className="container-header">
          <Nav>
            <div className="d-flex">
              <input
                name="name"
                type="search"
                placeholder="Search"
                className="nav-form"
                aria-label="Search"
                onChange={(value) => handleSearch(value)}
              />
              <button type="submit">Search</button>
            </div>
            <div
              className="admin-init d-flex"
              style={{ backgroundColor: "#CFD4ED", borderRadius: "50px", width: "38px", marginLeft: "24px" }}
            >
              <p style={{ margin: "auto", textAlign: "center" }}>U</p>
            </div>
            <DropdownButton id="dropdown-basic-button" title="Admin">
              <Dropdown.Item
                style={{
                  width: "fit-content",
                }}
              >
                <button
                  style={{
                    border: "none",
                    backgroundColor: "white",
                    color: "#0D28A6",
                    fontWeight: "700",
                  }}
                  onClick={logOut}
                >
                  Log Out
                </button>
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
