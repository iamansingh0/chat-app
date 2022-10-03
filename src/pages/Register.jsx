import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    console.log(`Name: ${displayName}\nEmail: ${email}\nPassword: ${password}`);

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/")
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
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
          {err && <span>Something went wrong!</span>}
        </form>
        <p className="sign-p">You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
