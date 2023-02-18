import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Map from '../components/map'
import RestaurantCard from '../components/RestaurantCard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [clickBool, setClick] = useState(false);
  // Show restaurant info popup window
  const handleClick=()=>{
    setClick(!clickBool);
  }
  return (
    <>
      <Head>
        <title>Restudy</title>
        <meta name="description" content="Rate restaurnay and study place on campus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <button onClick={handleClick}>Test click</button>
        <Map />
        {clickBool?
        <RestaurantCard name={"test name"} restId={"abc123"} rating={3} hours={"temp hours"} description={"Hello World"}/>
        :""
        }
      </main>
    </>
  )
}
