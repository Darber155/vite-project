import './App.css';
import Header from "/components/Header"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "/pages/Home"
import About from '/pages/About';
import Contact from '/pages/Contact';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App
