import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center flex flex-col items-center gap-6">
      <h2 className={`text-4xl font-semibold`}>Welcome To Chat App</h2>
      <Link
        className={`bg-white text-gray-800 px-5 py-2 rounded-full font-medium border-2 hover:bg-transparent hover:text-white duration-300`}
        to="/login"
      >
        Join Now
      </Link>
    </div>
  );
};

export default Home;
