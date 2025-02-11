import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./../node_modules/slick-carousel/slick/slick.css";
import "./../node_modules/slick-carousel/slick/slick-theme.css";
import "./../node_modules/bs-brain/components/blogs/blog-5/assets/css/blog-5.css";

import Navbar from "./components/Navbar/Navbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import BlogIndex from "./pages/Blogs/BlogIndex.jsx";
import Blog1 from "./pages/Blogs/Blog1.jsx";
import Blog2 from "./pages/Blogs/Blog2.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import Services from "./pages/Services/Services.jsx";
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
