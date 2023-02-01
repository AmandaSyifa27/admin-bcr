import axios from "axios";
import React, { useState } from "react";
import APIOrder from "../apis/APIOrder";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../configs/axiosInstance.js";

const EditCarForm = () => {
  //   const navigate = useNavigate();

  //   const handleAdd = async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.target);
  //     const name = formData.get("name");
  //     const price = formData.get("price");
  //     const image = formData.get("image");
  //     const category = formData.get("category");
  //     const values = { name, price, image, category };
  //     console.log({ values });

  //     try {
  //       APIOrder.postCar(formData);
  //       alert("did it");
  //       const returnTo = "/list-cars";
  //       navigate(returnTo);
  //     } catch (error) {
  //       alert("failed");
  //     }
  //   };

  const params = useParams();

  const [carData, setCarData] = useState();
  const Contoh = () => {
    React.useEffect(() => {
      const data = async () => {
        const res = axios.put(`${axiosInstance}/car/${params.carId}`);
        if (res.status === 200) {
          alert("success");
          setCarData(res.data);
        } else {
          alert("fail");
        }
        console.log(carData);
      };
    }, [params.carId]);
  };

  return (
    <div className="addcar-form">
      <form>
        <div className="inputs">
          <div className="input-name">
            <label>Name/Tipe mobil*</label>
            <input required type="name" name="name" placeholder="Input Nama/Tipe Mobil" />
          </div>
          <div className="input-price">
            <label>Harga*</label>
            <input required type="number" name="price" placeholder="Input Harga Sewa Mobil" />
          </div>
          <div className="input-pic">
            <label>Foto*</label>
            <input required type="file" name="image" placeholder="Upload Foto Mobil" />
          </div>
          <div className="input-category d-flex">
            <label>Kategori*</label>
            <select name="category">
              <option value="small">2 - 4 orang</option>
              <option value="medium">4 - 6 orang</option>
              <option value="large">6 - 8 orang</option>
            </select>
          </div>
        </div>
        <div className="add-button" style={{ marginTop: "31%" }}>
          <button>Cancel</button>
          <button onClick={Contoh} type="submit">
            Save
          </button>
        </div>
      </form>
      {carData ? <p>cat.name</p> : <p>yoo</p>}
    </div>
  );
};

export default EditCarForm;
