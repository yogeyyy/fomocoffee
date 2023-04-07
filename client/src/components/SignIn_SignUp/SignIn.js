import React from "react";
import "./SignIn_SignUp.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

function SignIn() {
  return (
    <div className="signin">
      <div className="signinArea">
        <div className="signinBox">
          <div className="signinContents">
            <h1 className="signinHeading">sign in</h1>
            <div className="socialAuth">
              <div className="oauthButton">
                <FacebookOutlinedIcon
                  sx={{ fontSize: "2rem", color: "white" , background: "#533727" , borderRadius: "100%"}}
                />
              </div>
              <div className="oauthButton">
                <TwitterIcon sx={{ fontSize: "2rem", color: "#533727" }} />
              </div>
              <div className="oauthButton">
                <GoogleIcon sx={{ fontSize: "2rem", color: "#533727" }} />
              </div>
            </div>
            <p>or use your account</p>
            <div className="signinForm">
              <form>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="signupBox"></div>
      </div>
    </div>
  );
}

export default SignIn;


