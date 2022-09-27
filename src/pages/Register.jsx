import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch(err){
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          Aman Chat App <i className="rocketchat icon big"></i>
        </span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Set password" />
          <input style={{ display: "none" }} type="file" id="avatar" />
          <label htmlFor="avatar" className="label-reg">
            <i class="file icon big"></i>
            <span className="pickAvatar">Pick an avatar</span>
          </label>
          <button className="sign">Sign up</button>
          {/* {err && <span>Something went wrong!</span>} */}
        </form>
        <p className="sign-p">You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
