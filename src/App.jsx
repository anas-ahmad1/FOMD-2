import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./pages/Gallery.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app-container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
