import app from "../configs/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp&Login.module.css";

const signUp = () => {
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const auth = getAuth(app);
  const handleSignUp = () => {
    setShowLoader(true);
    try {
      createUserWithEmailAndPassword(auth, createEmail, createPassword).then(
        (userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          alert("Successfully Signed Up");
        }
      );
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <>
      {showLoader && (
        <div className="absolute w-screen h-screen bg-zinc-950 opacity-85 flex justify-center items-center">
          <div className={styles.loader}></div>
        </div>
      )}
      <div
        className={`flex flex-col items-center gap-4 bg-white p-4 rounded-lg w-1/4`}
      >
        <input
          onChange={(e) => setCreateEmail(e.target.value)}
          className="bg-zinc-300 placeholder:text-zinc-500 rounded-full px-3 py-2 text-gray-800 outline-none border-2 border-zinc-400 focus:border-teal-800 duration-500 w-full"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setCreatePassword(e.target.value)}
          className="bg-zinc-300 placeholder:text-zinc-500 rounded-full px-3 py-2 text-gray-800 outline-none border-2 border-zinc-400 focus:border-teal-800 duration-500 w-full"
          type="text"
          placeholder="Password"
        />
        <button
          className="rounded-full border-2 border-teal-800 bg-teal-800 inline-block py-1 px-5 hover:bg-transparent hover:text-teal-800 duration-300"
          onClick={handleSignUp}
        >
          Sign up
        </button>
      </div>
      <p>
        Already have an Account?
        <Link className="underline" to={"/login"}>
          Login
        </Link>
      </p>
    </>
  );
};

export default signUp;
