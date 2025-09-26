import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Contact from "./pages/contact";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
