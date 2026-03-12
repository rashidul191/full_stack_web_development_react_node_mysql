import React from "react";
import { useParams } from "react-router-dom";

const TopMenuContent = () => {
  const { slug } = useParams();
  return (
    <>
      <div>Top Menu Content Coming soon........ {slug}</div>
    </>
  );
};

export default TopMenuContent;
