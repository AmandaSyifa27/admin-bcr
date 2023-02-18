import { cleanup, screen } from "@testing-library/react";
import renderWithProvider from "../utils/testUtils";
import SignIn from "../pages/SignIn.js";

afterEach(() => {
  cleanup();
});

describe("Sign in page test", () => {
  it("should render signin page component", () => {
    renderWithProvider(<SignIn />);
    const signinElement = screen.getByTestId("signin-test");
    expect(signinElement).toBeInTheDocument();
    expect(signinElement).toHaveTextContent(/welcome, admin bcr/i);
    expect(signinElement).toHaveTextContent(/welcome, admin bcr/i);
    expect(signinElement).toHaveTextContent(/email/i);
    // expect(signinElement).toContainHTML("Alert");
    // expect(signinElement).toContainHTML("<div>");
  });

  // it("shuold have a form element", () => {
  //   renderWithProvider(<SignIn />);
  //   const form = screen.getByTag("form");
  //   expect(form).toBeInTheDocument();
  // });
});
