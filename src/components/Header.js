import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Form, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPayload } from "../store/features/searchCarSlicing";
import { ActClearedSearchCar } from "../redux/actions/Carlist";
import Auth from "../utils/Auth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    try {
      alert("Logged Out");
      Auth.logOut();
      navigate("/sign-in");
    } catch (error) {
      alert("failed");
    }
  };
  function onSearch(e) {
    e.preventDefault();
    dispatch(setPayload({ name: e.target.value }));
    navigate("/list-cars");
  }

  return (
    <div className="header">
      <Navbar className="navbar" variant="light" bg="white">
        <Container className="container-header">
          <Nav>
            <Form className="d-flex">
              <Input
                prefix={<SearchOutlined />}
                onChange={(e) => onSearch(e)}
                placeholder="Search"
                type="text"
                className="nav-form"
              />
              <button
                onClick={() => {
                  dispatch(ActClearedSearchCar());
                }}
                style={{
                  padding: "8px 12px",
                }}
              >
                Clear
              </button>
            </Form>
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
