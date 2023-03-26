import React from "react";
import "./shopping.css";
import AddIcon from '@mui/icons-material/Add';

function Product(props) {
  return (
    <div className="productItem">
      <div className="productDisplay">
        <img className="productImg" src={props.url} alt="Product Img"/>
        <div className="addToCartBtn">
          <AddIcon sx={{ fontSize: "4rem", color:"#bfa17f"}}/>
        </div>
      </div>
      <div className="productContent">
        <h3 className="productHeading">{props.heading}</h3>
        <p className="productDesc">{props.description}</p>
        <div className="productPricing">
          <p className="pricingRs">Rs.</p>
          <p className="pricingAmt">{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
