import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import styles from "@/styles/Modal.module.css";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = () => {
  const [clickBool, setClick] = useState(false);
  const [result, setResult] = useState([]);
  const [restaurant, setRes] = useState({});
  const [restId, setRestid] = useState("");
  const [rating, setRating] = useState("");
  
  const handleClick = (event) => {
    const targetId = event.target.id;
    setClick(!clickBool);
    setRestid(targetId);

    const getData = async () => {
      // let arr=[];
      const docRef = doc(db, "restaurants", targetId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const resData = docSnap.data();
        // console.log("restaurant review:", resData.reviews);
        let sum = 0;
        resData.reviews.map((review) => (sum += review.overallRating));
        setRes(resData);

        setRating(sum / resData.reviews.length);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    getData();
  };

  const genJsx = (obj, id) => {
    // console.log(obj.name)
    return (
      <li key={id} id={id} onClick={handleClick}>
        {obj.name}
      </li>
    );
  };

  useEffect(() => {
    const getData = async () => {
      let arr = [];
      const querySnapshot = await getDocs(collection(db, "restaurants"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        arr.push(genJsx(doc.data(), doc.id));
        // console.log(arr);
        setResult(arr);
      });
    };
    if (result.length === 0) {
      getData();
    }
  }, [result]);

  return (
    <div>
      <h4>Restaurants</h4>
      <ul>
        {result.map((elem, index) => {
          return elem;
        })}
      </ul>
      {clickBool ? (
        <div className={styles.darkBg} onClick={handleClick}>
          <div className={styles.card}>
            {/* {console.log("rate", rating)} */}
            <RestaurantCard
              name={restaurant.name}
              restId={restId}
              rating={rating}
              hours={"5:30pm"}
              description={restaurant.restaurantDescription}
              waiting={18}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default RestaurantsList;
