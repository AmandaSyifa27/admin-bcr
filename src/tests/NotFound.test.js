import React from "react";
import NotFoundPage from "../pages/NotFoundPage";
import renderWithProvider from "../utils/testUtils";
import { screen } from "@testing-library/react";

describe("Not Found page test", () => {
  it("should render link element correctly", () => {
    renderWithProvider(<NotFoundPage />);
    expect(screen.getByRole(/notfoundpage/i)).toBeInTheDocument();
  });

  it("should contain infromation", () => {
    renderWithProvider(<NotFoundPage />);
    const errorStatus = screen.getByText("404");
    expect(errorStatus).toBeInTheDocument();

    const errorType = screen.getByText(/page not found/i);
    expect(errorType).toBeInTheDocument();
  });

  it("should render link to go back", () => {
    renderWithProvider(<NotFoundPage />);
    expect(screen.getByText(/back to dashboard/i)).toBeInTheDocument();
  });

  it("should have possibility description", () => {
    renderWithProvider(<NotFoundPage />);
    expect(screen.getByText(/Maybe you entered the wrong word/i)).toBeInTheDocument();
  });
});
