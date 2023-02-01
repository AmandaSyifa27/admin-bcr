import React, { useState } from "react";
import APIOrder from "../apis/APIOrder";
import Category from "../assets/Category.png";
import UpadateTime from "../assets/UpdateTime.png";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import "../styles/CarCards.css";
import { useNavigate } from "react-router-dom";
// import DeleteButton from "./DeleteButton";
import { Modal, ModalBody } from "react-bootstrap";
import DeleteModal from "../assets/DeleteModal.png";
import "../styles/DeleteButton.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

// button !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import React, { useState } from "react";
// import { DeleteOutlined } from "@ant-design/icons";
// import { Alert, Modal, ModalBody } from "react-bootstrap";
// import DeleteModal from "../assets/DeleteModal.png";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";

export function convertToLocalCurrrency(number) {
  if (!number) return null;
  const formatter = new Intl.NumberFormat("id-Id", { style: "currency", currency: "IDR" });
  return formatter.format(number);
}

export function convertToLocalTime(utc) {
  if (!utc) return null;
  const date = new Date(utc);
  const formatter = new Intl.DateTimeFormat("id-ID", { year: "numeric", month: "short", day: "numeric", hour: "numeric" });
  return formatter.format(date);
}

const CarCards = () => {
  const [cars, setCars] = useState([]);
  // const [filters, setFilters] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  // const [alertOpen, setAlertOpen] = useState(false);

  const navigate = useNavigate();

  const small = cars.filter((car) => car.category === "small");
  const medium = cars.filter((car) => car.category === "medium");
  const large = cars.filter((car) => car.category === "large");

  function showAll() {
    return cars();
  }
  function showSmall() {
    setCars(small);
    setIsActive(isActive);
  }
  function showMedium() {
    setCars(medium);
    setIsActive(isActive);
  }
  function showLarge() {
    setCars(large);
    setIsActive(isActive);
  }

  React.useEffect(() => {
    APIOrder.getCarsList().then((res) => {
      setCars(res.data.cars);
      console.log({ res });
    });
  }, []);

  const onDelete = async (id) => {
    setModalOpen(true);
    try {
      await APIOrder.deleteCar(id);
      alert("did");
    } catch (error) {
      alert("failed");
    }
  };
  const onCancel = () => {
    setModalOpen(false);
  };
  const onYes = async (id) => {
    // try {
    //   await APIOrder.deleteCar(id);
    //   alert("did");
    // } catch (error) {
    //   alert("failed");
    // }
    setModalOpen(false);
  };

  const Cards = () => {
    return cars.map((car) => {
      return (
        <div style={{ padding: "24px" }} className="car-card" key={car.id}>
          <div className="car-image">
            <img style={{ width: "303px" }} src={car.image} alt={car.name} />
          </div>
          <div className="card-content">
            <div className="card-info">
              <small>{car.name}</small>
              <strong>{convertToLocalCurrrency(car.price)} / hari</strong>
              <div style={{ display: "inline" }}>
                <img src={Category} alt="categoryPic" />
                <small>
                  {car.category === "small" && "2 - 4 people"}
                  {car.category === "medium" && "4 - 6 people"}
                  {car.category === "large" && "6 - 8 people"}
                </small>
              </div>
              <div style={{ display: "inline" }}>
                <img src={UpadateTime} alt="updateTime" />
                <small>Updated at {convertToLocalTime(car.updatedAt.split(","))}.00</small>
              </div>
            </div>
          </div>
          <div className="card-buttons">
            <div className="delete-button">
              <button className="on-delete" onClick={(id) => onDelete(car.id)}>
                <DeleteOutlined />
                <small> Delete</small>
              </button>
            </div>
            <Link to={`/edit-car/${car.id}`}>
              <button className="on-edit">
                <FormOutlined />
                <small> Edit</small>
              </button>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="CarCards">
      <div className="buttons">
        <button className={isActive ? "active-button" : null} onClick={showAll}>
          All
        </button>
        <button className={isActive ? "active-button" : null} onClick={showSmall}>
          2 - 4 people
        </button>
        <button className={isActive ? "active-button" : null} onClick={showMedium}>
          4 - 6 people
        </button>
        <button className={isActive ? "active-button" : null} onClick={showLarge}>
          6 - 8 people
        </button>
      </div>
      <div key="id" className="group-card">
        <Cards />
      </div>

      <Modal className="modal" show={modalOpen} animation={true}>
        <ModalBody className="modal-body">
          <div className="modal-content">
            <div>
              <img src={DeleteModal} />
            </div>
            <div>
              <h5>Menghapus Data Mobil</h5>
              <p>Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
            </div>
            <div>
              <button
                onClick={() => {
                  onYes(cars.id);
                  console.log(cars);
                }}
              >
                ya
              </button>
              <button onClick={onCancel}>tidak</button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CarCards;
