import React from "react";

import "./styles.css";

const Product = ({ img, link }) => {
  return (
    <div className="p">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
