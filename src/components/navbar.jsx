import styles from "@/styles/Navbar.module.css";
import homestyles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Login from "./login";
import Register from "./register";
import Image from 'next/image'
import { BsFillPersonFill,BsFillCartFil } from "react-icons/bs";


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
      <a href="/"> 
        <Image 
        src="/logo.png"
        alt="restudy logo"
        width={100}
        height={100}
      />
      </a>
      </div>
      <div className={styles.auth_buttons}>
        {signedIn==false ? (
          <div>
            <button onClick={toggleLogin} className={styles.btnPrimary}>Login</button>
            <button onClick={toggleRegister} className={styles.btnSecondary}>Register</button>
          </div>
        ) :
         <div>
             <button onClick={handleProfile}><BsFillPersonFill/></button>
             <button><BsFillCartFil/></button>
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
