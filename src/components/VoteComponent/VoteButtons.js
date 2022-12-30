const VoteButtons = () => {
  return (
    <div className="form-control mx-2 pb-3">
      <button className="input-group bg-base-300 rounded-2xl ">
        <span className="text-primary">+</span>
        <p className="text-xl p-2 w-16 font-semibold text-primary-focus">10</p>
        <span className="text-primary">-</span>
      </button>
    </div>
  );
};

export default VoteButtons;
