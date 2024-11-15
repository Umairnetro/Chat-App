import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div
        className={`flex flex-col items-center gap-4 bg-white p-4 rounded-lg w-1/4`}
      >
        <input
          className="bg-zinc-300 placeholder:text-zinc-500 rounded-full px-3 py-2 text-gray-800 outline-none border-2 border-zinc-400 focus:border-teal-800 duration-500 w-full"
          type="email"
          placeholder="Email"
        />
        <input
          className="bg-zinc-300 placeholder:text-zinc-500 rounded-full px-3 py-2 text-gray-800 outline-none border-2 border-zinc-400 focus:border-teal-800 duration-500 w-full"
          type="text"
          placeholder="Password"
        />
        <button className="rounded-full border-2 border-teal-800 bg-teal-800 inline-block py-1 px-5 hover:bg-transparent hover:text-teal-800 duration-300">
          Login
        </button>
      </div>
      <p>
        Don't have an Account?{" "}
        <Link className="underline" to={"/signup"}>
          Create
        </Link>
      </p>
    </>
  );
};

export default Login;
