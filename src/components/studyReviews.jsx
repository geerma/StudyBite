import styles from "@/styles/Study.module.css";

const StudyReviews = ({ review }) => {
  return (
    <div className={styles.studyreview_box}>
      <div className={styles.studyratings}>
        <p>Overall: {review.overallRating}</p>
        <p>Outlets: {review.outlets}</p>
        <p>Seating: {review.seating}</p>
        <p>Quietness: {review.quietness}</p>
      </div>
      <div className={styles.studycomments}>
        <p>Comments: {review.comments}</p>
      </div>
    </div>
  );
};

export default StudyReviews;
