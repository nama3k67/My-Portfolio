import React from "react";

import Product from "../Product";
import { products } from "../../data.js";

import "./styles.css";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. Nam Tran</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          impedit ad mollitia modi. Dolores, quos recusandae? Repellat
          praesentium, perferendis repellendus vitae provident cumque, eos,
          quidem voluptates nobis fugiat consequatur ea!
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
