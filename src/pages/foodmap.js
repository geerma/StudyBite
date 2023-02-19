import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import RestaurantCard from '../components/RestaurantCard'
import MapAsset from "../components/MapAsset"
import RestaurantsList from '../components/restaurantsList'
import Navbar from "../components/navbar"

const inter = Inter({ subsets: ['latin'] })

export default function FoodMap() {
  const [clickBool, setClick] = useState(false);
  const [listBool, setList] = useState(false);
  const [restId, setId] = useState("");
  // Show restaurant info popup window

  return (
    <>
      <Head>
        <title>StudyBite</title>
        <meta name="description" content="Rate restaurnay and study place on campus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrap}>
      <Navbar />
      <main className={styles.main}>
      {/* <button onClick={handleClick} id="1">Test click 1</button>
      <button onClick={handleClick} id="2">Test click 2</button> */}
        <MapAsset />
       
        
      </main>
      </div>
    </>
  )
}
