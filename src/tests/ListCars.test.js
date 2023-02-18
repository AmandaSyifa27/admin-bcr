import { screen } from "@testing-library/react";
import React from "react";
import ListCars from "../pages/ListCars";
import renderWithProvider from "../utils/testUtils";

describe("List Cars test", () => {
  it("should have div element with classname listcars", () => {
    renderWithProvider(<ListCars />);
    expect(screen.getByRole("listcars")).toBeInTheDocument();
  });

  it("buttons should working corretly", () => {
    renderWithProvider(<ListCars />);
    const addCarButton = screen.getByText(/add new car/i);
    expect(addCarButton).toBeInTheDocument();

    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toHaveProperty("type", "submit");
  });

  it("should have some images", () => {
    renderWithProvider(<ListCars />);
    const dashBoardImg = screen.getByAltText(/dashboardimg/i);
    expect(dashBoardImg).toBeInTheDocument();

    const carsImg = screen.getByAltText(/carsimg/i);
    expect(carsImg).toBeInTheDocument();
  });
});
