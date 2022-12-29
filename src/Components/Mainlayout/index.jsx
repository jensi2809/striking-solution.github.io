import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Mainlayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Mainlayout;
