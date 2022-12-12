import { useState, useEffect } from "react";

import { connect } from "react-redux";
const Comment = (props) => {
  console.log("Comment: props", props.comments.comments);

  return (
    <div className="py-8  flex w-full">
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <p>We are using cookies for no reason.</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, {})(Comment);
