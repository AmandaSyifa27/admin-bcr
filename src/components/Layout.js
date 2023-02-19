import React from "react";
import Header from "../components/Header.js";
import Sidebar1 from "../components/Sidebar1.js";
import Sidebar2 from "../components/Sidebar2.js";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar1 />
      <Sidebar2 />
      <Header />
      {children}
    </>
  );
};

export default Layout;
