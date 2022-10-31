import "./App.css";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Logo from "./pages/Logo";
import Html from "./pages/Html";
import Css from "./pages/Css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/css" element={<Css />} />
          <Route path="/html" element={<Html />} />
          <Route path="/design" element={<Logo />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
