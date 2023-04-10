import React from 'react';
// import Navbar from './components/header/Navbar'
// import Maincomp from './Maincomp'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

// import Footer from './components/footer/Footer'
// import SignIn from './components/SignIn_SignUp/SignIn'
// import SignUp from './components/SignIn_SignUp/SignUp'
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
      <Container>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/register" element={<SignUp />}/>
        </Routes>
      </Container>
  );
}

const Container = styled.div`
  max-width: 100vw;
`;

export default App;
