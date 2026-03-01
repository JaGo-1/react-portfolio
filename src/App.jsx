import "./App.css";
import FaviconSwitcher from "./components/FaviconSwitcher";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Footer from "./components/Footer";
import { CursorProvider } from "./context/CursorContex";
import CustomCursor from "./components/CustomCursor";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <CursorProvider>
      <CustomCursor />
      <ReactLenis root options={{ duration: 1.2 }}>
        <div className="overflow-x-hidden">
          <FaviconSwitcher />
          <Navbar />
          <Home />
          <Works />
          <About />
          <Footer />
        </div>
      </ReactLenis>
    </CursorProvider>
  );
}

export default App;
