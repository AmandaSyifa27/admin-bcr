import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../store/features";
import { Provider } from "react-redux";

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
