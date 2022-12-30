import Dashboard from "./Dashboard";
import CommentContainer from "../CommentsComponent";
import AddCommentContainer from "../AddComment";

const DashboardContainer = () => {
  return (
    <>
      <Dashboard />
      <CommentContainer />
      <AddCommentContainer />
    </>
  );
};

export default DashboardContainer;
