import styles from "@/styles/Navbar.module.css";
import homestyles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Login from "./login";
import Register from "./register";
import Cart from "./cart";
import Image from "next/image";
import { BsFillPersonFill, BsFillCartFill } from "react-icons/bs";

import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../firebase/firebase";

import Burger from "../assets/logo.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [cart, setCart] = useState(false);

  const router = useRouter();

  const toggleLogin = () => {
    setLogin(!login);
  };

  const toggleRegister = () => {
    setRegister(!register);
  };

  const handleProfile = () => {
    // Go to profile
    router.push('/user-profile');
  };

  const handleLogout = () => {
    console.log("Logging out");
    signOut(auth)
      .then(() => {
        console.log("Sign out Sucessful");
        location.reload();
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleLogo = () => {
    // Go to index
    router.push('/');
  }

  const handleCart =()=>{
    setCart(!cart);
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
        <Image
          src={Burger}
          alt="Logo"
          width={100}
          height={100}
          onClick={handleLogo}
        />
      </div>
      <div className={styles.auth_buttons}>
        {signedIn == false ? (
          <div>
            <button onClick={toggleLogin} className={styles.btnPrimary}>
              Login
            </button>
            <button onClick={toggleRegister} className={styles.btnSecondary}>
              Register
            </button>
          </div>
        ) : (
          <div className={styles.loggedin_buttons}>
            <button onClick={handleProfile} className={styles.btnPrimary}>
              <BsFillPersonFill />
            </button>
            <button onClick={handleCart}>
              <BsFillCartFill />
            </button>
            <button onClick={handleLogout} className={styles.btnSecondary}>Logout</button>
          </div>
        )}
      </div>
      {login && <Login handleClose={toggleLogin} />}
      {register && <Register handleClose={toggleRegister} />}
      {cart && <Cart/>}
    </div>
  );
};

export default Navbar;
