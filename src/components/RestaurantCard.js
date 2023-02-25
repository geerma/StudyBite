import React, { useEffect, useRef, useState } from "react";
// import { db } from "../firebase/firebase";
// import { collection, doc, setDoc } from "firebase/firestore";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Modal.module.css";
import { BsFillStarFill } from "react-icons/bs";

function RestaurantCard({ restId, name, hours, waiting, rating, description }) {
  const [result, setResult] = useState([]);
  const [request, setRequest] = useState([]);
  const rates = rating;
  let starsArr = [];
  const star = (num) => {
    return <BsFillStarFill key={num} />;
  };
  for (let i = 0; i < rates; i++) {
    starsArr.push(star(i));
  }

  return (
    <div>
      {/* // Restaurant info card */}
      <div id={restId} className={styles.card}>
        <h3 className={styles.cardh2}>{name}</h3>
        <h4 className={styles.wating}>{waiting} Mins</h4>
        <div id="rating" className={styles.row}>
          {starsArr}
        </div>
        <div id="info">
          <p>{description}</p>
        </div>
        <p id="hours">
          <span id="openStatus" className={styles.openStatus}>
            Open
          </span>
          <span>{hours} closed</span>
        </p>

        <a href={`/restaurant/${restId}`} className={styles.btn}>
          Go
        </a>
      </div>
      <button id="leftBtn" className={styles.navBtn}>
        {String.fromCharCode(60)}
      </button>
      <button id="rightBtn" className={styles.navBtn}>
        {String.fromCharCode(62)}
      </button>
    </div>
  );
}

export default RestaurantCard;
