import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import { connect } from "react-redux";
import { getUser, postComment } from "../../store/actions";

const uID = new Date().getTime();

const AddCommentContainer = (props) => {
  const user = { ...props.user.user };
  console.log("AddCommentContainer: user: ", user);

  const [post, setPost] = useState({
    id: uID,
    title: "",
    comment: "",
    created_at: new Date(),
    points: 0,
    userId: "",
  });
  console.log("AddCommentContainer: post: ", post);

  const getPost = (comment) => {
    setPost({
      ...post,
      title: comment.title,
      comment: comment.comment,
    });
  };

  useEffect(() => {
    props.getUser(user.userId);
    setPost({ ...post, userId: user.userId });
  }, [props]);

  return (
    <AddComment postComment={props.postComment} getPost={getPost} user={user} />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    username: state.username,
    comment: state.user,
  };
};

export default connect(mapStateToProps, { postComment, getUser })(
  AddCommentContainer
);
