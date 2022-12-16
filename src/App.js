import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

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
      <Test />
      <SignupContainer />
      <CommentContainer />
    </div>
  );
}

export default App;
