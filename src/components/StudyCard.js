import React, { useEffect, useRef, useState } from "react";

import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Modal.module.css";

function StudyCard({ buildingId }) {
  const [buildingData, setBuildingData] = useState();

  //   let starsArr = [];
  //   const star = (num) => {
  //     return <i className={styles.star} key={num}></i>;
  //   };
  //   for (let i = 0; i < rates; i++) {
  //     starsArr.push(star(i));
  //   }

  const getData = async () => {
    const docRef = doc(db, "building", buildingId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Building data:", docSnap.data());
      setBuildingData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div id={buildingId} className={styles.card}>
        <h3 className={styles.cardh2}>{buildingData && buildingData.name}</h3>
        <div id="rating">5 Stars</div>
        <p id="hours">
          <span>Hours: 8:00 AM - 5:00 PM</span>
        </p>
        <div id="info">
          <p>Number of Sections: {buildingData && buildingData.sections.length}</p>
        </div>
        <a href={`/study/${buildingId}`} className={styles.btn}>
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

export default StudyCard;
