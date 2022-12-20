import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Route, Routes } from "react-router-dom";

import NavbarContainer from "./components/NavbarComponent";
import Test from "./components/Test";
import SignupContainer from "./components/SignupComponent";
import CommentContainer from "./components/CommentsComponent";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div>
      <NavbarContainer />
      <Test />
      <Routes>
        <Route path="/signup" element={<SignupContainer />} />
      </Routes>
      <CommentContainer />
    </div>
  );
}

export default App;
