import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Map from '../components/map'
import RestaurantCard from '../components/RestaurantCard'
import MapAsset from "../components/MapAsset"
import Navbar from "../components/navbar"

const inter = Inter({ subsets: ['latin'] })

export default function FoodMap() {
  const [clickBool, setClick] = useState(false);
  const [restId, setId] = useState("");
  // Show restaurant info popup window

  {/*const handleClick=(event)=>{
    const targetId = event.target.id;
    setClick(!clickBool);
    console.log(`Clicked element id: ${targetId}`);
    setId(targetId);
  }*/}
  return (
    <>
      <Head>
        <title>Restudy</title>
        <meta name="description" content="Rate restaurnay and study place on campus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
      {/* <button onClick={handleClick} id="1">Test click 1</button>
      <button onClick={handleClick} id="2">Test click 2</button> */}
        
        <MapAsset />
        {clickBool?
        <div className={styles.darkBg} onClick={handleClick}>
          <RestaurantCard name={"test name"} restId={restId} rating={3} hours={"5:30pm"} description={"Hello World"} waiting={"18"}/>
        </div>
        :""
        }
      </main>
    </>
  )
}
