import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import Comment from "./Comment";
import { connect } from "react-redux";
import { getComments } from "../../store/actions";

const CommentContainer = (props) => {
  useEffect(() => {
    props.getComments();
  }, []);

  return (
    <div>
      {props.isLoading === true ? (
        <div className="flex h-[100vh] z-10 w-full justify-center text-9xl bg-base-100 pt-20">
          <ThreeDots
            height={350}
            width={300}
            color="#570DF8"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            radius="8.5"
            ariaLabel="three-dots-loading"
            secondaryColor="#3D4451"
          />
        </div>
      ) : (
        props.comments.map((comm, i) => <Comment key={i} commentsData={comm} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments.comments,
    isLoading: state.comments.isLoading,
    errors: state.comments.errors,
    user: { ...state.user },
  };
};

export default connect(mapStateToProps, { getComments })(CommentContainer);
