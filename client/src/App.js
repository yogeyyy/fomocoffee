import './App.css';
import Navbar from './components/header/Navbar'
import Maincomp from './Maincomp'
import Footer from './components/footer/Footer'
import SignIn from './components/SignIn_SignUp/SignIn'
import SignUp from './components/SignIn_SignUp/SignUp'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Maincomp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
