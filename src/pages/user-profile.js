import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/firebase/firebase';
import React, { useEffect, useState } from "react";
import TransactionHistory from '@/components/transactionHistory';
import ProfileDropdown from '@/components/ProfileDropdown';
import styles from "@/styles/Transactionhistory.module.css";
import BurgerImage from "../assets/logo.png";
import Avatar from "../assets/avatar.png";
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] })
            
export default function userProfile() {
    
    const [userData, setUserData] = useState({});

    useEffect(() => {
        getUserData();
    }, []);
    
    const uid = '8PBspZtOC8jdQtaLw9P9';
    
    const getUserData = async () => {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            console.log("user doc data:", docSnap.data());
            setUserData(docSnap.data());            
        } else {
            console.log("No such document!");
        }
    };

  return (
    <>
      <Head>
        <title>User Profile</title>
        <meta name="description" content="Update User Profile Information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main className={styles.main}>
        <div className={styles.header}>
            <div className={styles.topLeft}>
        <Image src={BurgerImage} width={150} height={150} alt="burgerimage" />
            </div>
            <div className={styles.topRight}>
        <Image src={Avatar} width={150} height={150} alt="avatar" />
            </div>
        </div>
        <div className={styles.yourAccountMain}>
            <div className={styles.yourAccountHeader}>
                <h1 className={inter.className}>
                    Your Account
                </h1>
                <h2 className={inter.className}>
                Hello, {userData.firstName}!
                </h2>
            </div>
            <div className={styles.order}>
                <h2 className={inter.className}>
                    Your order status
                </h2>
                <div className={styles.preparing}>
                    <h1 className={inter.className}>
                        You have no orders
                    </h1>
                </div>
            </div>
                <div className={styles.line}></div>
                <TransactionHistory userData={userData}/>
                <div className={styles.line}></div>
                <ProfileDropdown/>
            <button className={styles.button}>Sign Out</button>
        </div>

      </main>
    </>
  )
}
