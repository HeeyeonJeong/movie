import React from "react";
import HeaderCompoenent from "../Header/HeaderComponent";

function LayoutComponent({ children }) {
  return (
    <div>
      <HeaderCompoenent />
      {children}
    </div>
  );
}

export default LayoutComponent;
