import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Welcome.module.css";
import Navbar from "../components/navbar";

import Title from "../assets/title.png";
import Star from "../assets/star.png";
import StarAnimation from "../assets/star-animation.gif";
import BurgerImage from "../assets/logo.png";
import BurgerIcon from "../assets/icon-burger.png";
import StudyIcon from "../assets/icon-study.png";
import Login from "@/components/login";
import Register from "@/components/register";

import { auth } from "../firebase/firebase";

import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const [signedIn, setSignedIn] = useState(false);

  const router = useRouter();

  const toggleLogin = () => {
    setLogin(!login);
  };

  const toggleRegister = () => {
    setRegister(!register);
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

  const handleStudy = () => {
    console.log('study');
    router.push('/studymap');
  }

  const handleBite = () => {
    router.push('/foodmap');
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
    <>
      <Head>
        <title>Restudy</title>
        <meta
          name="description"
          content="Find the perfect Study space and grab a Bite to eat!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.titlelogo}>
          <Image src={Title} width={300} alt="titlelogo" />
        </div>
        <Image src={BurgerImage} width={400} height={400} alt="burgerimage" />
        <div className={styles.staricon}>
          <Image
            src={StarAnimation}
            width={150}
            height={150}
            alt="staranimation"
          />
        </div>
        <div className={styles.welcomeicons}>
          <Image src={StudyIcon} width={150} height={150} alt="studyicon" onClick={() => handleStudy()}/>
          <Image src={BurgerIcon} width={150} height={150} alt="burgericon" onClick={() => handleBite()}/>
        </div>
        <div className={styles.welcomeicons}>
          <h2>Study</h2>
          <h2>Bite</h2>
        </div>
        {signedIn == false ? (
          <div className={styles.welcomebuttons}>
            <button onClick={toggleLogin}>Login</button>
            <button onClick={toggleRegister}>Register</button>
          </div>
        ) : <button onClick={handleLogout}>Logout</button>}

        {login && <Login handleClose={toggleLogin} />}
        {register && <Register handleClose={toggleRegister} />}
      </main>
    </>
  );
}
