import React from "react";
import "./shopping.css";
import Product from "./Product";
import hotProducts, {coldProducts} from "./productdata";

function createHotProduct(prod) {
  return (
    <Product
      key={prod.id}
      url={prod.url}
      heading={prod.heading}
      description={prod.description}
      price={prod.price}
    />
  );
}

function createColdProduct(prod) {
  return (
    <Product
      key={prod.id}
      url={prod.url}
      heading={prod.heading}
      description={prod.description}
      price={prod.price}
    />
  );
}

function Shopping() {
  return (
    <div className="shopping">
      <div className="shoppingArea">
        <div className="shoppingHeading">
          <p className="shoppingMenu">Menu</p>
          <h1 className="ourCoffee">Our coffee</h1>
        </div>
        <div className="shoppingItems">
          <p className="itemHeading">Hot Brews</p>
          <div className="itemRow">{hotProducts.map(createHotProduct)}</div>
        </div>
        <div className="shoppingItems">
          <p className="itemHeading">Cold Brews</p>
          <div className="itemRow">{coldProducts.map(createColdProduct)}</div>
        </div>
      </div>
    </div>
  );
}

export default Shopping;
