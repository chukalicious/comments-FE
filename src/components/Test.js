import { getComments } from "../store/actions/index";
import { connect } from "react-redux";

const Test = (props) => {
  const handleClick = () => {
    props.getComments();
  };

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
