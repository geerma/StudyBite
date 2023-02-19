import styles from "@/styles/Study.module.css";
import Image from "next/image";

import Average from "../assets/average.png";
import Bad from "../assets/bad.png";
import Good from "../assets/good.png";

import Outlets from "../assets/outlets.png";
import Quietness from "../assets/quietness.png";
import Seating from "../assets/seating.png";

const StudyReviews = ({ review }) => {
  return (
    <div className={styles.studyreview_box}>
      <div className={styles.studyratings}>
        <span><Image src={Average} /> Overall: {review.overallRating}</span>
        <></>
        <span><Image src={Outlets} /> Outlets: {review.outlets}</span>
        <></>
        <span><Image src={Seating} /> Seating: {review.seating}</span>
        <></>
        <span><Image src={Quietness} /> Quietness: {review.quietness}</span>
      </div>
      <div className={styles.studycomments}>
        <p>Comments: {review.comments}</p>
      </div>
    </div>
  );
};

export default StudyReviews;
