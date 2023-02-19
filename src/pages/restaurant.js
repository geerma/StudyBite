import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, doc, setDoc,getDoc,getDocs } from "firebase/firestore";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "../components/navbar"
import { useRouter } from 'next/router'



const inter = Inter({ subsets: ['latin'] })

export default function Restaurant() {

  const [renderBool, setRender] = useState(true);
  const [result, setResult] = useState([]);
  const [order, setOrder] = useState({});
  const router = useRouter()
  const { restId } = router.query
  // let menu = [];
  // const genMenu = (obj)=>{
    
  //     return <p>{obj.item}</p>;
       
  //   }
  console.log("restId=",restId);
  useEffect(()=>{
    const getData = async () => {
        // let arr=[];
        const querySnapshot = await getDocs(collection(db, "restaurants"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          
          const match =doc.data();
          console.log("dami",match)
          
          if(match && renderBool){
            // setResult(damiData);
            setResult({
              "name":match.name,
              "waiting":"15",
              "menu":match.menu,
              "reviews":match.reviews
            });
            
          
            // match.menu.map((elem,index)=>{
            //     menu.push(genMenu(elem))
            //   console.log("menu",menu);
            // })
          
          
            setRender(false);
          }    
        // setResult(arr);
        });
    };
    if(result.length===0){
        getData();
    }else{

    }
    
},[result])
  const plusItem =(event,name)=>{
    let targetId = event.target.id;
    console.log("+click",targetId);
    
    let item = name;
    if(order && order[item]){
      let num = order[item];
      order[item]=num++;
      
    }else{
      order[item]=1;
    }
    setOrder(order);
    console.log("order=",order)
  }
  const minusItem=(event,name)=>{
    console.log("-click");
    let targetId = event.target.id;
  }
  
  return (
    <div>
    {
      result &&  
      <div>
        <Head>
          <title>Restudy | Restaurant</title>
          <meta name="description" content="Rate restaurnay and study place on campus" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
      <main className={styles.main}>

        {console.log("return data",result)}
        
        <div className={styles.content}>
          <h2 >
            {result.name}
          </h2>
          <p className={styles.wating}>{result.waiting} mins</p>
          <ul>
          {/* {menu} */}
            {result.menu && 
            result.menu.map((elem,index)=>{
             
              return (
                <div key={index}>
                  <div className={styles.row}>
                  <p>{elem.item}</p>
                  <span>{elem.priceInCents/100}</span>
                  <div className={styles.row}>
                  <button id="minus" className={styles.smallBtn} onClick={minusItem}>-</button>
                  <input type="number" value={order[elem.item]}/>
                  <button id="plus" className={styles.smallBtn} onClick={(event)=>plusItem(event,elem.item)}>+</button>
                  </div>
                  </div>
                  <p>{elem.itemDescription}</p>
                </div>
              )
            })}
          </ul>
        </div>
        <button className={styles.drawerBtn}>Review</button>
      </main>
      
      </div>
      
    }
      
    </div>
  )

}
