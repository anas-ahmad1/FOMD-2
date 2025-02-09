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

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        {/* <Homepage /> */}
        {/* <BlogIndex /> */}
        {/* <Blog1 /> */}
        <Blog2 />
        {/* <Gallery /> */}
      </div>
    </>
  );
}

export default App;
