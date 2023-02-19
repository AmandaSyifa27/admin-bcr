import React from "react";
import rootReducer from "../store/features";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

export default function renderWithProvider(
  children,
  { preloadState = {}, store = configureStore({ reducer: rootReducer, preloadState }), ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>;
      </Provider>
    );
  }
  return render(<Wrapper>{children}</Wrapper>);
}
