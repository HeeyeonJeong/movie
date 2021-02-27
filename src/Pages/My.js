import React from "react";
import LayoutComponent from "../components/Layout/LayoutComponent";
import MyContainer from "../containers/MyContainer";

function MyPage() {
  return (
    <LayoutComponent>
      <main>
        <MyContainer />
      </main>
    </LayoutComponent>
  );
}

export default MyPage;
