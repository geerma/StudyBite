import React, { useState } from "react";
import styles from "@/styles/Loginregister.module.css";

import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword, reload } from "firebase/auth";

import { collection, addDoc } from "firebase/firestore";

import Link from "next/link";

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = async (user) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        uuid: user.uid,
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
      location.reload();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        addUser(user);
        // console.log(user);
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
        <h1>Register</h1>
        <div className={styles.inputs}>
          <label>First Name</label>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={(e) => handleRegister(e)}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
