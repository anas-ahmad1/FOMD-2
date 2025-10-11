import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./../node_modules/slick-carousel/slick/slick.css";
import "./../node_modules/slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar/Navbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import HomeEvaluation from "./pages/HomeEvaluation/HomeEvaluation.jsx";
import CashOffer from "./pages/CashOffer/CashOffer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";

function App() {
  return (
    <>
      <div className="app-container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home-evaluation" element={<HomeEvaluation />} />
            <Route path="/cash-offer" element={<CashOffer />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
