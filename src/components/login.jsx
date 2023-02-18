import React, { useState } from "react";
import styles from "@/styles/Loginregister.module.css";

import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useRouter } from "next/router";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className={styles.loginregister_container}>
      <div className={styles.loginregister_box}>
        <span
          className={styles.loginregister_close}
          onClick={props.handleClose}
        >
          X
        </span>
        Login
        <div className={styles.inputs}>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={(e) => handleLogin(e)}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
