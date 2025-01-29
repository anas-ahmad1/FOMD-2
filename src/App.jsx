import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./pages/Gallery.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import Homepage from "./pages/Homepage/Homepage.jsx";

function App() {
  return (
    <>
    <div className="app-container">
      <Navbar/>
      <Homepage/>
    </div>
    </>
  );
}

export default App;
