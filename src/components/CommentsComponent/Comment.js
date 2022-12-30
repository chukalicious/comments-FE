import VoteButtonsContainer from "../VoteComponent";
import { FaReply } from "react-icons/fa";

const Comment = (props) => {
  console.log("Comment: props: commentsData: ", props);

  return (
    <div className="card card-side bg-base-100 my-8 mx-4">
      <div className="card-body">
        <div className="flex w-full mx-auto">
          <div className="avatar w-[20%] h-11">
            <div className="w-18 mx-auto rounded-full">
              <img src={props.commentsData.avatar} alt="user avatar" />
            </div>
          </div>
          <div className="w-[75%] flex text-primary">
            <h2 className="card-title p-2">{props.commentsData.title}</h2>
            <p className="text-neutral">
              {/* date: {props.commentsData.created_at} */}
            </p>
          </div>
        </div>
        <div className="max-h-fit">
          <p className="text-justify px-2 py-1">{props.commentsData.comment}</p>
        </div>
        <div className="card-actions flex pt-2 justify-between">
          <VoteButtonsContainer />
          <button className="btn btn-ghost mx-2 text-primary-focus">
            {" "}
            <FaReply className="mr-1" /> Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
