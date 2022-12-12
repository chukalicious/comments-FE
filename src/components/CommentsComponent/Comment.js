const Comment = (props) => {
  console.log("Comment: props: commentsData: ", props.commentsData);

  return (
    <div className="py-8  flex flex-col w-full">
      <h2 className="mx-auto">these are the comments</h2>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <p>{props.commentsData.comment}</p>
          <p>posted on: {props.commentsData.date}</p>
          <p>by: {props.commentsData.user_id}</p>
          <p>votes: {props.commentsData.points}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
