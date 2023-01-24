import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ListCars from "../pages/ListCars";
import AddCar from "../pages/AddCar";
import NotFoundPage from "../pages/NotFoundPage";
// import OrdersTable from "../components/OrdersTable";

function SetUpRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list-cars" element={<ListCars />} />
        <Route path="/add-car" element={<AddCar />} />
        {/* <Route path="/orders-table" element={<OrdersTable />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default SetUpRouter;
