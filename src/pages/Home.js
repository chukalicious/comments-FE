import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Commentor.io</h1>
          <p className="py-6">
            You don't have to be a social media expert to use it! You can post
            comments, replies, and create a profile all in one place. You'll be
            up and running in no time.
          </p>
          <Link to="/login">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
