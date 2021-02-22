import React from "react";
import LayoutComponent from "../components/Layout/LayoutComponent";
import DetailContainer from "../containers/DetailContainer";
import SimilarContainer from "../containers/SimilarContainer";

function DetailPage() {
  return (
    <LayoutComponent>
      <DetailContainer />
      <SimilarContainer />
    </LayoutComponent>
  );
}

export default DetailPage;
