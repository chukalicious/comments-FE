import { useState, useEffect } from "react";
import { clearForm } from "../../helpers/clearForm";

const initialState = {
  title: "",
  comment: "",
};

const AddComment = () => {
  // Local State //
  const [postFields, setPostFields] = useState(initialState);
  console.log("AddComment: postFields: ", postFields);

  const handleChange = (e) => {
    setPostFields({ ...postFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm(setPostFields, initialState);
  };

  return (
    <div className="card card-side bg-base-100 my-8 mx-4">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="max-h-fit">
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Post a comment!</span>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              value={postFields.title}
              placeholder="Enter your post title..."
              className="input input-bordered input-primary w-full max-w-sm"
            />
            <label className="label">
              <span className="label-text-alt"></span>
            </label>
          </div>
          <textarea
            onChange={handleChange}
            type="text"
            name="comment"
            value={postFields.comment}
            placeholder="Add a comment..."
            className="input input-bordered input-primary w-full h-48 max-w-sm"
          />
        </div>
        <div className="card-actions flex pt-2 justify-between">
          <div className="avatar w-[20%] h-fit">
            <div className="w-[4rem] mx-auto rounded-full">
              <img
                src="https://placeimg.com/80/80/people"
                alt="author avatar"
              />
            </div>
          </div>
          <button className="btn btn-lg btn-primary mx-2">Send</button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
