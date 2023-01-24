import React from "react";
import { Form, FormControl, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import dashboardImg from "../assets/DashboardImg.png";
import carsImg from "../assets/CarsImg.png";
import "../styles/AddCar.css";
import adminInit from "../assets/AdminInit.png";
const AddCar = () => {
  return (
    <div className="addcar" role="addcar">
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
      <div className="header">
        <Navbar variant="light" bg="white">
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
      <div className="content">
        <div className="addcar-content">
          <div className="addcar-feature">
            <div className="navig">
              <p>Cars</p>
              <p>&gt;</p>
              <Link to="/list-cars">
                <p>List Car</p>
              </Link>
              <p>&gt;</p>
              <p>Add New car</p>
            </div>
            <h3>Add New car</h3>
          </div>
          <div className="addcar-form">
            <form>
              <div className="forms">
                <div className="form-name">
                  <label>Name/Tipe mobil*</label>
                  <input type="name" name="name" placeholder="Input Nama/Tipe Mobil" />
                </div>
                <div className="form-price">
                  <label>Harga*</label>
                  <input type="number" name="price" placeholder="Input Harga Sewa Mobil" />
                </div>
                <div className="form-pic">
                  <label>Foto*</label>
                  <input type="upload" name="image" placeholder="Upload Foto Mobil" />
                </div>
                <div className="form-category">
                  <label>Kategori*</label>
                  <select name="category">
                    <option disabled>Pilih Kategori Mobil</option>
                    <option value="small">2 - 4 orang</option>
                    <option value="medium">4 - 6 orang</option>
                    <option value="large">6 - 8 orang</option>
                  </select>
                </div>
              </div>
              <div className="add-button">
                <button>Cancel</button>
                <button>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
