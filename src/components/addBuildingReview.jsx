import React, { useState } from "react";
import styles from "@/styles/Loginregister.module.css";
import { doc, setDoc, updateDoc } from "firebase/firestore"; 

import { auth, db } from "../firebase/firebase";

import { useRouter } from "next/router";

const AddBuildingReview = (props) => {
  const [rating, setRating] = useState();
  const [outlets, setOutlets] = useState();
  const [seating, setSeating] = useState();
  const [quietness, setQuietness] = useState();
  const [comment, setComment] = useState("");
  const sectionId = props.buildingId;
  const section = props.sectionData;
  let reviews = section.reviews; 
  console.log(section);

  const updateDatabase = async (review) => {
    updateDoc(doc(db, "building", sectionId), review);
  }

  
  const handleSubmitReview = () => {
    console.log(rating, outlets, seating, quietness, comment);
    const review = {
      overallRating: rating,
      outlets: outlets,
      seating: seating,
      quietness: quietness,
      comments: comment,
    }
    reviews.push(review);

    const sectionData = {
      name: section.name,
      reviews: reviews,
    }
    updateDatabase(sectionData);
  }

  return (
    <div className={styles.loginregister_container}>
      <div className={styles.loginregister_box}>
        <span
          className={styles.loginregister_close}
          onClick={props.handleClose}
        >
          X
        </span>
        <h1>Add Building Review</h1>
        <div className={styles.inputs}>
          <label>Overall Rating</label>
          <input type="number" min="1" max="5" onChange={(e) => setRating(e.target.value)} />
          <label>Outlets</label>
          <input type="number" min="1" max="5" onChange={(e) => setOutlets(e.target.value)} />
          <label>Seating</label>
          <input type="number" min="1" max="5" onChange={(e) => setSeating(e.target.value)} />
          <label>Quietness</label>
          <input type="number" min="1" max="5" onChange={(e) => setQuietness(e.target.value)} />
          <label>Comment</label>
          <input type="text" onChange={(e) => setComment(e.target.value)} />
          <button onClick={() => handleSubmitReview()}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddBuildingReview;
