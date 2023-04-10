import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

function Product(props) {
  return (
    <Container>
      <ProductDisplay>
        <img src={props.url} alt="Product Img" />
        <AddToCartButton>
          <AddIcon sx={{ fontSize: "4rem", color: "#bfa17f" }} />
        </AddToCartButton>
      </ProductDisplay>
      <ProductContent>
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
        <ProductPricing>
          <p>Rs.</p>
          <p>{props.price}</p>
        </ProductPricing>
      </ProductContent>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 25%;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;
const ProductDisplay = styled.div`
  img {
    max-width: 100%;
  }
`;
const AddToCartButton = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #7f5837;
  border-radius: 5rem;
  &:hover {
    background-color: #5e3f2c;
  }
`;
const ProductContent = styled.div`
  text-align: left;
  h3 {
    font-family: "Spline Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.4rem;
    margin-bottom: 0.6rem;

    color: #432f1a;
  }
  p {
    font-family: "Spline Sans";
    font-style: normal;
    font-size: 1rem;
    line-height: 1.1rem;
    margin-bottom: 0.6rem;

    color: #000000;
  }
`;
const ProductPricing = styled.div`
  display: flex;

  p:nth-child(1) {
    font-family: "Spline Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.7rem;

    color: #432f1a;
  }

  p:nth-child(2) {
    font-family: "Spline Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 3rem;
    line-height: 3rem;

    color: #432f1a;
  }
`;
export default Product;
