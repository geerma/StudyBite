import styles from "@/styles/Study.module.css";

const StudyReviews = ({review}) => {
  return (
    <div className={styles.studyreview_box}>
      <p>Overall: {review.overallRating}</p>
      <p>Quietness: {review.quietness}</p>
      <p>Outlets: {review.outlets}</p>
      <p>Seating {review.seating}</p>
    </div>
  );
};

export default StudyReviews;
