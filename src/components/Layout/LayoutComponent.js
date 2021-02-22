import React from "react";
import HeaderCompoenent from "../Header/HeaderComponent";

function LayoutComponent({ children }) {
  return (
    <>
      <HeaderCompoenent />
      {children}
    </>
  );
}

export default LayoutComponent;
