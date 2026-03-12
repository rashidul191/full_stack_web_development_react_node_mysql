import React from "react";
import { useParams } from "react-router-dom";

const SubMenuContent = () => {
  const { slug } = useParams();
  return (
    <>
      <div>Sub Menu Content Coming soon........ {slug}</div>
    </>
  );
};

export default SubMenuContent;
