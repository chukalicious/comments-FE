import { useState, useEffect } from "react";
import { clearForm } from "../../helpers/clearForm";
import * as yup from "yup";

const initialState = {
  title: "",
  comment: "",
};

const initialErrors = {
  title: "",
  comment: "",
};

const initialDisabled = true;

const AddComment = (props) => {
  console.log("AddComment: props: ", props);

  // Local State //
  const [postFields, setPostFields] = useState(initialState);
  console.log("AddComment: postFields: ", postFields);

  // Validation State //
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const formSchema = yup.object().shape({
    title: yup
      .string()
      .required("You must add a title to your post")
      .max(120, "You've exceeded the character limit for the title")
      .min(2, "Must include at least two characters"),
    comment: yup
      .string()
      .required("You forgot your comment!")
      .min(1, "You must enter something!")
      .max(260, "You've exceeded the max characters"),
  });

  const validateSchema = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validateSchema(name, value);
    setPostFields({ ...postFields, [name]: value });
  };

  useEffect(() => {
    formSchema.isValid(postFields).then((valid) => setDisabled(!valid));
  }, [postFields, formErrors, formSchema]);

  // Controls //
  const handleChange = (e) => {
    inputChange(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getPost({ ...postFields });
    props.postComment();
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
            <div className="label text-error">{formErrors.title}</div>
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
          <div className="label text-error">{formErrors.comment}</div>
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
          <button disabled={disabled} className="btn btn-lg btn-primary mx-2">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
