import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import StudyCard from "../components/StudyCard";
import MapAssetStudy from "../components/MapAssetStudy";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function StudyMap() {
  const [clickBool, setClick] = useState(false);
  const [restId, setId] = useState("");
  // Show restaurant info popup window

  {
    /*const handleClick=(event)=>{
    const targetId = event.target.id;
    setClick(!clickBool);
    console.log(`Clicked element id: ${targetId}`);
    setId(targetId);
  }*/
  }
  return (
    <>
      <Head>
        <title>StudyBite</title>
        <meta
          name="description"
          content="Find the perfect Study space and grab a Bite to eat!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        {/* <button onClick={handleClick} id="1">Test click 1</button>
      <button onClick={handleClick} id="2">Test click 2</button> */}
        <MapAssetStudy />
        {/* {clickBool ? (
          <div className={styles.darkBg} onClick={handleClick}>
            <StudyCard
              name={"Study Name"}
              restId={restId}
              rating={3}
              hours={"6:30pm"}
              description={"Hello World"}
              waiting={"11"}
            />
          </div>
        ) : null} */}
      </main>
    </>
  );
}
