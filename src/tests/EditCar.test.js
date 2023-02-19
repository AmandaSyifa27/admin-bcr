import React from "react";
import EditCar from "../pages/EditCar";
import renderWithProvider from "../utils/testUtils";
import { screen } from "@testing-library/react";

describe("Edit car page", () => {
  it("should render edit car page component correctly", () => {
    renderWithProvider(<EditCar />);
    const editCarPage = screen.getByTestId("editcar-test");
    expect(editCarPage).toBeInTheDocument();
    expect(editCarPage).toHaveProperty("style");
    expect(editCarPage).toHaveTextContent(/edit car/i);
  });
});
