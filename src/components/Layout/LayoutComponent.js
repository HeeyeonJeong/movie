import React from "react";
import FooterComponent from "../Footer/FooterComponent";
import HeaderCompoenent from "../Header/HeaderComponent";

function LayoutComponent({ children }) {
  return (
    <>
      <HeaderCompoenent />
      {children}
      <FooterComponent />
    </>
  );
}

export default LayoutComponent;
