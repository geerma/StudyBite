import styles from "@/styles/Navbar.module.css";
import { useEffect, useState } from "react";
import Login from "./login";
import Register from "./register";

import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../firebase/firebase";

const Footer = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  };

  const toggleRegister = () => {
    setRegister(!register);
  };

  const handleProfile = () => {
    console.log("Go to Profile"); 
    // implement
  }

  const handleLogout = () => {
    console.log("Logging out");
    signOut(auth).then(() => {
        console.log("Sign out Sucessful");
        location.reload();
      }).catch((error) => {
        // An error happened.
      });
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("You are signed in as", user);
        setSignedIn(true);
      }
    });
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Navbar</h1>
      </div>
      <div className={styles.auth_buttons}>
        {signedIn==false ? (
          <div>
            <button onClick={toggleLogin}>Login</button>
            <button onClick={toggleRegister}>Register</button>
          </div>
        ) :
         <div>
             <button onClick={handleProfile}>Profile</button>
             <button onClick={handleLogout}>Logout</button>
            </div>
             
             }
      </div>
      {login && <Login handleClose={toggleLogin} />}
      {register && <Register handleClose={toggleRegister} />}
    </div>
  );
};

export default Footer;
