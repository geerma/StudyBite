import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Study.module.css";
import { useRouter } from "next/router";

import { auth, db } from "../../firebase/firebase";

import { doc, getDoc } from "firebase/firestore";

import { useEffect, useState } from "react";
import StudyReviews from "@/components/studyReviews";
import Navbar from "@/components/navbar";
import AddBuildingReview from "@/components/addBuildingReview";

const inter = Inter({ subsets: ["latin"] });

export default function StudyreviewsPage() {
  const router = useRouter();
  const { buildingId } = router.query;

  const [buildingName, setBuildingName] = useState();
  const [sectionData, setSectionData] = useState();
  const [selectSection, setSelectSection] = useState(undefined);

  const [addReview, setAddReview] = useState(false);

  const toggleAddReview = () => {
    setAddReview(!addReview);
  };

  const getData = async () => {
    const docRef = doc(db, "building", buildingId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Building data:", docSnap.data());
      setBuildingName(docSnap.data().name);
      const sectionSnapData = docSnap.data().sections;
      setSectionData(sectionSnapData);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (!buildingId) {
      return;
    }
    getData();
  }, [buildingId]);

  return (
    <>
      <Head>
        <title>Building Reviews</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>Building: {buildingName && buildingName}</h1>
        {selectSection == undefined && sectionData?.map((section, id) => (
          <div key={id} className={styles.section_buttons}>
            <button onClick={() => setSelectSection(id + 1)}>
              {section.name}
            </button>
          </div>
        ))}
        {selectSection != undefined && <div className={styles.section_buttons}><button onClick={() => setSelectSection(undefined)}>All Sections</button> </div>}
        {selectSection != undefined
          ? sectionData[selectSection-1].reviews.map((review, id) => (
              <StudyReviews review={review} key={id} />
            ))
          : null}
        {selectSection != undefined && <div className={styles.addreview_button}><button onClick={toggleAddReview}>Add Review</button></div>}
        {addReview && <AddBuildingReview handleClose={toggleAddReview} />}
      </main>
    </>
  );
}
