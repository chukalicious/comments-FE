import axios from "axios";
import { getComments } from "../store/actions/index";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const Test = (props) => {
  console.log("Test.js: props", props);
  const [comments, setComments] = useState([]);
  const handleClick = () => {
    props.getComments();
  };

  useEffect(() => {
    setComments(comments);
  }, [props]);
  return (
    <div className="flex">
      <button onClick={handleClick} className="btn mx-auto mt-16">
        Call API
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { comments: state.comments.comments };
};
export default connect(mapStateToProps, { getComments })(Test);
