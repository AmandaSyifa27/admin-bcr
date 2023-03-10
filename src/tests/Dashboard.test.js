import React from "react";
import Dashboard from "../pages/Dashboard";
import renderWithProvider from "../utils/testUtils";
import { fireEvent, screen } from "@testing-library/react";

describe("Dashboard Test", () => {
  it("should have div with classname dashboard", () => {
    renderWithProvider(<Dashboard />);
    expect(screen.getByRole(/dashboard/i)).toBeInTheDocument();
  });

  it("component has input search", () => {
    renderWithProvider(<Dashboard />);
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveProperty("type", "text");
  });

  it("should have select input for month", () => {
    renderWithProvider(<Dashboard />);
    const monthSelect = screen.getByPlaceholderText(/select month/i);
    expect(monthSelect).toBeInTheDocument();
    expect(monthSelect).toHaveProperty("name", "month");
  });

  it("buttons should working correctly", () => {
    renderWithProvider(<Dashboard />);
    const submitMonth = screen.getByText("Go");
    expect(submitMonth).toBeInTheDocument();
    expect(submitMonth).toHaveProperty("type", "submit");

    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toHaveProperty("type", "submit");
  });
  it("should have some images", () => {
    renderWithProvider(<Dashboard />);
    const dashBoardImg = screen.getByAltText(/dashboardimg/i);
    expect(dashBoardImg).toBeInTheDocument();

    const carsImg = screen.getByAltText(/carsimg/i);
    expect(carsImg).toBeInTheDocument();
  });

  it("form should working correctly", () => {});
});
