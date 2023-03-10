import React from "react";
import AddCar from "../pages/AddCar";
import renderWithProvider from "../utils/testUtils";
import { render, screen } from "@testing-library/react";

describe("Add Car page test", () => {
  it("should have a div with classname addcar", () => {
    renderWithProvider(<AddCar />);
    expect(screen.getByRole(/addcar/i)).toBeInTheDocument();
  });
});
