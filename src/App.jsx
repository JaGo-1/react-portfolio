import "./App.css";
import FaviconSwitcher from "./components/FaviconSwitcher";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <FaviconSwitcher />
      <Navbar />
      <Home />
      {/* <Works />
      <About />
      <Footer /> */}
    </div>
  );
}

export default App;
