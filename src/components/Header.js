import React, { useState } from "react";
import { Form, FormControl, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import adminInit from "../assets/AdminInit.png";
import Auth from "../utils/Auth";
import APIOrder from "../apis/APIOrder.js";
import { useDispatch, useSelector } from "react-redux";
import { ActClearedSearchCar, ActSearchCar, Searchlist } from "../redux/actions/Carlist";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

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
    dispatch(ActSearchCar(e.target.value));
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

// import React, { useState } from "react";
// import { Form, FormControl, Nav, DropdownButton, Dropdown } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import { useNavigate } from "react-router-dom";
// import adminInit from "../assets/AdminInit.png";
// import Auth from "../utils/Auth";
// import APIOrder from "../apis/APIOrder.js";
// import { Input } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";
// import { ActClearedSearchCar, ActSearchCar, Searchlist } from "../redux/actions/Carlist";
// import { setPayload, searchPayloadSearchCars } from "../store/features/searchCarSlicing";

// const Header = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { payload } = useSelector(searchPayloadSearchCars);

//   const logOut = () => {
//     try {
//       alert("Logged Out");
//       Auth.logOut();
//       navigate("/sign-in");
//     } catch (error) {
//       alert("failed");
//     }
//   };

//   // function handleSearch(e) {
//   //   e.preventDefault();
//   //   dispatch(ActSearchCar(e.target.value));
//   //   navigate("/list-cars");
//   // }
//   function handleSearch(e) {
//     dispatch(setPayload({ ...payload, name: e.target.value, page: 1 }));
//   }

//   return (
//     <div className="header">
//       <Navbar className="navbar" variant="light" bg="white">
//         <Container className="container-header">
//           <Nav>
//             <Form className="d-flex">
//               <Input
//                 prefix={<SearchOutlined />}
//                 onChange={(e) => handleSearch(e)}
//                 name="name"
//                 type="search"
//                 placeholder="Search"
//                 className="nav-form"
//                 aria-label="Search"
//               />
//               <button onClick={dispatch(ActClearedSearchCar())} style={{ padding: "8px 12px" }}>
//                 Search
//               </button>
//             </Form>
//             <div
//               className="admin-init d-flex"
//               style={{ backgroundColor: "#CFD4ED", borderRadius: "50px", width: "38px", marginLeft: "24px" }}
//             >
//               <p style={{ margin: "auto", textAlign: "center" }}>U</p>
//             </div>
//             <DropdownButton id="dropdown-basic-button" title="Admin">
//               <Dropdown.Item
//                 style={{
//                   width: "fit-content",
//                 }}
//               >
//                 <button
//                   style={{
//                     border: "none",
//                     backgroundColor: "white",
//                     color: "#0D28A6",
//                     fontWeight: "700",
//                   }}
//                   onClick={logOut}
//                 >
//                   Log Out
//                 </button>
//               </Dropdown.Item>
//             </DropdownButton>
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;
