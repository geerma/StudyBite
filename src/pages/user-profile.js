import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/firebase/firebase';
import React, { useEffect, useState } from "react";
import TransactionHistory from '@/components/transactionHistory';

const inter = Inter({ subsets: ['latin'] })
            
export default function userProfile() {
    
    const [userData, setUserData] = useState({});
    // const [dropdown, setDropdown] = useState(false);

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
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            User Profile
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <div className={styles.center}>
            <h2 className={inter.className}>
               Hello, {userData.firstName} {userData.lastName}
            </h2>
        </div>
        <div>
            <TransactionHistory userData={userData}/>
        </div>

      </main>
    </>
  )
}
