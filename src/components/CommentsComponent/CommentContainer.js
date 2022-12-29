import { ThreeDots } from "react-loader-spinner";
import Comment from "./Comment";
import RefreshComments from "./RefreshComments";
import { connect } from "react-redux";

const CommentContainer = (props) => {
  console.log("CommentContainer: props: ", props);
  return (
    <div>
      <RefreshComments />
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
  };
};

export default connect(mapStateToProps, {})(CommentContainer);
