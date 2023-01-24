import React, { useState } from "react";
import { Form, FormControl, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import dashboardImg from "../assets/DashboardImg.png";
import carsImg from "../assets/CarsImg.png";
import "../styles/ListCars.css";
import adminInit from "../assets/AdminInit.png";
import APIOrder from "../apis/APIOrder";
// import { getCarsList } from "../apis/APIOrder";

const ListCars = () => {
  const [cars, setCars] = useState([]);

  // React.useEffect(() => {
  //   APIOrder.getCarsList().then((res) => {
  //     setCars(res);
  //     console.log(res);
  //   });
  // }, []);

  // const CarCards = () => {
  //   return cars.map((cars) => {
  //     return (
  //       <div key={cars.id}>
  //         <p>{cars.name}</p>
  //         <p>{cars.price}</p>
  //         <img src={cars.image} alt={cars.name} />
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className="listcars" role="listcars">
      <div className="bars">
        <div className="sidebar">
          <div className="sidebar-logo">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="34" height="34" fill="#CFD4ED" />
            </svg>
          </div>
          <div className="sidebar-menu">
            <div>
              <Link to="/">
                <img src={dashboardImg} alt="dashboardimg" />
                <p>Dashboard</p>
              </Link>
            </div>
            <div className="listcars-menu">
              <Link to="/list-cars">
                <img src={carsImg} alt="carsimg" />
                <p>List Cars</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="sidebar2">
          <div className="header-logo">
            <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="34" fill="#CFD4ED" />
            </svg>
          </div>
          <div className="sidebar2-p">
            <div>
              <h5>CARS</h5>
            </div>
            <div className="sidebar2-name">
              <h5>List car</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="listcar-main">
        <div className="header">
          <Navbar className="navbar" variant="light" bg="white">
            <Container className="container-header">
              <Nav>
                <Form className="d-flex">
                  <FormControl type="search" placeholder="Search" className="nav-form" aria-label="Search" />
                  <button>Search</button>
                </Form>
                <img src={adminInit} alt="adminaccount" />
                <select className="nav-select">
                  <option>Unis Badri</option>
                  <option>Unis Badri</option>
                  <option>Unis Badri</option>
                </select>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <div className="content">
          <div className="listcar-content">
            <div className="listcar-features">
              <div className="navigation">
                <p>Cars</p>
                <p>&gt;</p>
                <p>List Car</p>
              </div>
              <div className="feature">
                <h3>List Car</h3>
                <Link to="/add-car">
                  <button>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 3.75V14.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3.75 9H14.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Add New Car
                  </button>
                </Link>
              </div>
              <div className="buttons">
                <button>All</button>
                <button>2 - 4 people</button>
                <button>4 - 6 people</button>
                <button>6 - 8 people</button>
              </div>
            </div>
            <div className="car-cards">
              <div className="tempo">
                <img src="CardCollection.png" alt="temporary" />
                {/* <CarCards /> */}
              </div>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
              <h1>hahaha</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCars;
