import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Route, Routes } from "react-router-dom";

import PrivateRoutes from "./components/PrivateRoutes";
import NavbarContainer from "./components/NavbarComponent";
import Home from "./pages/Home";
import SignupContainer from "./components/SignupComponent";
import LoginContainer from "./components/LoginComponent/Login";
import DashboardContainer from "./components/DashboardComponent";
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
        <Route path="/signup" element={<SignupContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<DashboardContainer />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
