import React from "react";
import styled from "styled-components";
import Product from "./Product";
import hotProducts, { coldProducts } from "./productdata";

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

function BuyCoffee() {
  return (
    <Container>
      <ShoppingHeading>
        <p>Menu</p>
        <h1>Our Coffee</h1>
      </ShoppingHeading>
      <ShoppingItems>
        <p>Hot Brews</p>
        <ItemRow>{hotProducts.map(createHotProduct)}</ItemRow>
      </ShoppingItems>
      <ShoppingItems>
        <p>Cold Brews</p>
        <ItemRow>{coldProducts.map(createColdProduct)}</ItemRow>
      </ShoppingItems>
    </Container>
  );
}

const Container = styled.div`
  background-color: #bfa17f;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const ShoppingHeading = styled.div`
  text-align: center;
  margin-top: 5.375rem;
  margin-bottom: 2rem;
  p {
    font-family: "Spline Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: #432f1a;
  }

  h1 {
    font-family: "Anton";
    font-style: normal;
    font-weight: 400;
    font-size: 7rem;
    line-height: 8rem;

    letter-spacing: 0.07em;
    text-transform: uppercase;

    color: #7f5837;
  }
`;

const ShoppingItems = styled.div`
  margin-top: 3rem;
  max-width: 76%;
  min-height: auto;
  margin: auto;
  text-align: center;
  padding-bottom: 5.375rem;
  p {
    font-family: "Spline Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: #432f1a;
  }
`;

const ItemRow = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

export default BuyCoffee;
