import React, { useEffect, useRef, useState } from "react";

import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Modal.module.css";

function FoodReviewsCard({ restaurantId }) {
  const [reviewData, setReviewData] = useState();

  //   let starsArr = [];
  //   const star = (num) => {
  //     return <i className={styles.star} key={num}></i>;
  //   };
  //   for (let i = 0; i < rates; i++) {
  //     starsArr.push(star(i));
  //   }

  const getData = async () => {
    const docRef = doc(db, "restaurants", "85OI6kxqPtbuE7tmAuEw");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Food Review Data:", docSnap.data());
      setReviewData(docSnap.data().reviews);
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
      <div id={restaurantId} className={styles.review_card}>
        <h3 className={styles.cardh2}>Reviews</h3>
        {reviewData?.map((review, id) => (
          <div key={id} className={styles.food_review}>
            <p>Rating: {review.overallRating}</p>
            <p>Comment: {review.comment}</p>
            <p>Author: {review.userId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodReviewsCard;
