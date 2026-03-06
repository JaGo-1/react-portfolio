import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FaviconSwitcher from "./components/FaviconSwitcher";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Works from "./pages/Works";
import WorkDetails from "./pages/WorkDetails";
import About from "./pages/About";
import Footer from "./components/Footer";
import { CursorProvider } from "./context/CursorContex";
import CustomCursor from "./components/CustomCursor";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <Router>
      <CursorProvider>
        <CustomCursor />
        <ReactLenis root options={{ duration: 1.2 }}>
          <div className="overflow-x-hidden">
            <FaviconSwitcher />
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Works />
                    <About />
                    <Footer />
                  </>
                }
              />
              <Route path="/work/:id" element={<WorkDetails />} />
            </Routes>
          </div>
        </ReactLenis>
      </CursorProvider>
    </Router>
  );
}

export default App;
