import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

function SignIn() {
  return (
    <Container>
      <Navbar />
      <FormContainer>
        <SignInContainer>
          <SignInForm>
            <h1>Sign in</h1>
            <SocialContainer>
              <OauthButton>
                <FacebookOutlinedIcon
                  sx={{
                    fontSize: "2rem",
                    color: "white",
                    background: "#533727",
                    borderRadius: "100%",
                  }}
                />
              </OauthButton>
              <OauthButton>
                <TwitterIcon sx={{ fontSize: "2rem", color: "#533727" }} />
              </OauthButton>
              <OauthButton>
                <GoogleIcon sx={{ fontSize: "2rem", color: "#533727" }} />
              </OauthButton>
            </SocialContainer>
            <p>or use your account</p>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <SignInButton>Sign In</SignInButton>
            <p>Forgot password?</p>
          </SignInForm>
        </SignInContainer>
        <RightContainer>
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and we'll get brewing</p>
          <a href="/register"><GhostButton>Sign Up</GhostButton></a>
        </RightContainer>
      </FormContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background: #bfa17f;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 14px 28px #7f5837, 0 10px 10px #7f5837;
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 450px;
  margin: 6rem auto;
  display: flex;
`;

const SignInContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #5e3f2c;
  min-height: 100%;

  h1 {
    font-family: "Anton";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 3rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #bfa17f;
  }

  p {
    font-family: "Spline Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 24px;
    color: #bfa17f;
    margin-bottom: 2rem;
  }
`;

const GhostButton = styled.button`
  width: 7rem;
  height: 2rem;
  font-family: "Spline Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 0.8rem;
  color: #bfa17f;
  background-color: transparent;
  border: 2px solid #bfa17f;
  border-radius: 0;
  margin-bottom: 1rem;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
`;

const SignInForm = styled.form`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Anton";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 4rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: #533727;
  }

  p {
    font-family: "Spline Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1rem;
    color: #7f5837;
    margin-bottom: 0.5rem;
  }

  input {
    width: 70%;
    padding: 0.5rem;
    border-radius: 0;
    border: None;
    background: rgba(191, 161, 127, 0.3);
    font-family: "Spline Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 0.8rem;
    color: rgba(127, 88, 55);
    margin-bottom: 1rem;
    outline: none;

    &::placeholder {
      color: rgba(127, 88, 55, 0.5);
    }

    &:hover {
      border: 1px solid #7f5837;
    }

    &:focus {
      border-radius: 0;
      border: 2px solid #7f5837;
    }
  }
`;

const SignInButton = styled.button`
  width: 7rem;
  height: 2rem;
  font-family: "Spline Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 0.8rem;
  color: #bfa17f;
  background: #7f5837;
  border: 1px solid #7f5837;
  border-radius: 0;
  margin-bottom: 1rem;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const OauthButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid #533727;
`;

export default SignIn;
