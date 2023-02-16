import React, { useState } from "react";
import { FormOutlined, DeleteOutlined, ReloadOutlined, LoadingOutlined } from "@ant-design/icons";
import { Modal, ModalBody } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { message, Button, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchCars, searchPayloadSearchCars, setPayload, selectSearchCars } from "../store/features/searchCarSlicing";
import APIOrder from "../apis/APIOrder";
import carNotFound from "../assets/DeleteModal.png";
import DeleteModal from "../assets/DeleteModal.png";
import Category from "../assets/Category.png";
import UpdateTime from "../assets/UpdateTime.png";
import "../styles/CarCards.css";
import "../styles/DeleteButton.css";

export function convertToLocalCurrency(number) {
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

const Cards = ({ cars, filterByCategory, onDelete }) => {
  const stateSearchCars = useSelector(selectSearchCars);
  const status = stateSearchCars.status;

  if (cars.length === 0)
    return (
      <div style={{ textAlign: "center", margin: "auto", color: "#0d28a6" }}>
        <img src={carNotFound} alt="notfoundcar" style={{ marginBottom: "10px" }} />
        <em>Car Not Found...</em>
      </div>
    );
  if (status === "loading")
    return (
      <div style={{ margin: "auto", textAlign: "center", color: "#0d28a6" }}>
        <LoadingOutlined />
        <em style={{ marginTop: "10px", display: "block" }}>Loading...</em>
      </div>
    );
  return cars
    .filter((car) => (filterByCategory ? car.category === filterByCategory : !!car))
    .map((car) => {
      return (
        <div style={{ padding: "24px" }} className="car-card" key={car.id}>
          <div className="car-image">
            <img style={{ width: "303px" }} src={car.image} alt={car.name} />
          </div>
          <div className="card-content">
            <div className="card-info">
              <small>{car.name}</small>
              <strong>{convertToLocalCurrency(car.price)} / hari</strong>
              <div style={{ display: "flex" }}>
                <img
                  src={Category}
                  alt="categoryPic"
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                />
                <small>
                  {car.category === "small" && "2 - 4 people"}
                  {car.category === "medium" && "4 - 6 people"}
                  {car.category === "large" && "6 - 8 people"}
                </small>
              </div>
              <div style={{ display: "flex" }}>
                <img
                  src={UpdateTime}
                  alt="updateTime"
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                />
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
            <Link to={`/list-cars/edit-car/${car.id}`}>
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

const CarCards = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [carIdForDelete, setCarIdForDelete] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const location = useLocation();

  const statePayloadSearchCars = useSelector(searchPayloadSearchCars);
  const stateSearchCars = useSelector(selectSearchCars);
  const category = stateSearchCars.payload.category;
  const page = stateSearchCars.payload.page;
  const pageCount = stateSearchCars.data.pageCount;

  function showAll() {
    dispatch(setPayload({ ...statePayloadSearchCars, category: "" }));
  }
  function showSmall() {
    dispatch(setPayload({ ...statePayloadSearchCars, category: "small" }));
  }
  function showMedium() {
    dispatch(setPayload({ ...statePayloadSearchCars, category: "medium" }));
  }
  function showLarge() {
    dispatch(setPayload({ ...statePayloadSearchCars, category: "large" }));
  }

  React.useEffect(() => {
    if (statePayloadSearchCars) dispatch(fetchSearchCars(statePayloadSearchCars));
  }, [statePayloadSearchCars, dispatch]);

  const onDelete = (id) => {
    setModalOpen(true);
    setCarIdForDelete(id);
  };
  const onCancel = () => {
    setModalOpen(false);
    setCarIdForDelete("");
  };
  const onYes = async () => {
    try {
      await APIOrder.deleteCar(carIdForDelete);
      message.success("Data Berhasil Dihapus");
    } catch (error) {
      alert("failed");
    }
    setModalOpen(false);
  };

  function handleChangePage(value) {
    dispatch(setPayload({ ...statePayloadSearchCars, page: value }));
  }

  return (
    <>
      {contextHolder}
      <div className="CarCards">
        <div className="buttons">
          <button onClick={showAll}>All</button>
          <button onClick={showSmall}>2 - 4 people</button>
          <button onClick={showMedium}>4 - 6 people</button>
          <button onClick={showLarge}>6 - 8 people</button>
          <Button
            style={{ border: "none", background: "none", boxShadow: "none" }}
            onClick={() => window.location.reload(false)}
            icon={<ReloadOutlined />}
          />
        </div>
        <div key="id" className="card-group">
          <Cards cars={stateSearchCars.data.cars} onDelete={onDelete} />
        </div>
        <Modal className="modal" show={modalOpen} animation={true} centered>
          <ModalBody className="modal-body">
            <div className="modal-content">
              <div>
                <img src={DeleteModal} alt="deleteModal" />
              </div>
              <div>
                <h5>Menghapus Data Mobil</h5>
                <p>Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    onYes();
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
      <Pagination
        onChange={(value) => handleChangePage(value)}
        defaultCurrent={page}
        total={`${pageCount}0`}
        style={{
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "30px",
          marginTop: "30px",
          marginBottom: "40px",
        }}
      />
    </>
  );
};

export default CarCards;
