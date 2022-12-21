import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Route, Routes } from "react-router-dom";

import NavbarContainer from "./components/NavbarComponent";
import Home from "./pages/Home";
import SignupContainer from "./components/SignupComponent";
import LoginContainer from "./components/LoginComponent/Login";
import Footer from "./pages/Footer";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupContainer />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
