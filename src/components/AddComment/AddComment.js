const AddComment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="card card-side bg-base-100 my-8 mx-4">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="max-h-fit">
          <textarea
            type="text"
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
