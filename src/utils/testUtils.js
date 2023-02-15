import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "..store/features";
import Provider from "react-redux";

export default function renderWithRouter(
  children,
  { preloadState = {}, store = configureStore({ reducer: rootReducer, preloadState }) } = {}
) {
  function Wrapper({ children }) {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
  return render(<Wrapper>{children}</Wrapper>);
}
