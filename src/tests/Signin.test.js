import React from "react";
import renderWithProvider from "../utils/testUtils";
import SignIn from "../pages/SignIn.js";
import { cleanup, screen } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

describe("Sign in page test", () => {
  it("should render signin page component", () => {
    renderWithProvider(<SignIn />);
    const signinElement = screen.getByTestId("signin-test");
    expect(signinElement).toBeInTheDocument();
    expect(signinElement).toHaveTextContent(/welcome, admin bcr/i);
    expect(signinElement).toHaveTextContent(/email/i);
  });
});
