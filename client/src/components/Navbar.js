import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <Container>
      <Inner>
        <Logo>
          <img src="./fomologo.svg" alt="fomo logo" />
        </Logo>
      </Inner>
      <RightContainer>
        <NavButton>
          <p>Home</p>
        </NavButton>
        <NavButton>
          <p>About</p>
        </NavButton>
        <NavButton>
          <p>Buy Coffee</p>
        </NavButton>
        <NavButton>
          <p>Customize</p>
        </NavButton>
        <NavButton>
          <p>Orders</p>
        </NavButton>
        <NavButton>
          <p>SignIn</p>
        </NavButton>
        <CartButton>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon id="icon" style={{ color: "#BFA17F" }} />
          </Badge>
        </CartButton>
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  background: #5e3f2c;
  position: fixed;
  z-index: 100;
  border-bottom: 2px solid #bfa17f;
  justify-content: space-between;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

const Logo = styled.div`
  cursor: pointer;
  img {
    width: 7rem;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  column-gap: 2.5rem;
  margin-left: auto;
`;

const NavButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  p {
    font-weight: 600;
    color: #bfa17f;
    text-transform: uppercase;
    font-family: "Spline Sans", sans-serif;
    font-style: normal;
  }
`;

const CartButton = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  margin-right: 3rem;
`;

export default Navbar;
