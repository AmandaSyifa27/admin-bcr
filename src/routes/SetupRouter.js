import React from "react";
import AddCar from "../pages/AddCar";
import Dashboard from "../pages/Dashboard";
import EditCar from "../pages/EditCar";
import ListCars from "../pages/ListCars";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import SignIn from "../pages/SignIn";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function SetUpRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="/list-cars" element={<ListCars />} />
          <Route path="/list-cars/add-car" element={<AddCar />} />
          <Route path="/list-cars/edit-car/:carId" element={<EditCar />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default SetUpRouter;
