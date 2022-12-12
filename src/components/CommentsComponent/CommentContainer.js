import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import Comment from "./Comment";
import { connect } from "react-redux";

const CommentContainer = (props) => {
  console.log("CommentContainer: props", props.comments);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setComments(props.comments.comments);
  }, [props.comments, props.isLoading]);

  return (
    <div>
      {props.isLoading ? (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        comments.map((comm, i) => <Comment key={i} commentsData={comm} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, {})(CommentContainer);
