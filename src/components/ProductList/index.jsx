import React from "react";

import Product from "../Product";
import { products } from "../../data.js";

import "./styles.css";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          Create & inspire.
          <br /> Nam Tran
        </h1>
        <p className="pl-desc">
          Welcome to my original products, they will gradually more and more
          developed in the future. 😃
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
