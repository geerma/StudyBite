import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, doc, setDoc,getDoc,getDocs } from "firebase/firestore";
import Head from 'next/head'
import Image from 'next/image'
import Cart from "../components/cart";
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "../components/navbar"
import { useRouter } from 'next/router'
import FoodReviewsCard from "@/components/FoodReviewsCard";



const inter = Inter({ subsets: ['latin'] })

export default function Restaurant() {

  const [openReview, setOpenReview] = useState(false);

  const [renderBool, setRender] = useState(true);
  const [result, setResult] = useState([]);
  const [order, setOrder] = useState({});
  const [cart, setCart] = useState(false);
  const router = useRouter()
  const { restId } = router.query
  
  console.log("restId=",restId);
  useEffect(()=>{
    const getData = async () => {
        // let arr=[];
        const querySnapshot = await getDocs(collection(db, "restaurants"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          
          const resp =doc.data();
          // resp.filter(doc.id===restId)
          const match = doc.data();
          console.log("resp",resp)
          
          if(match && renderBool){
            // setResult(damiData);
            setResult({
              "name":match.name,
              "waiting":"15",
              "menu":match.menu,
              "reviews":match.reviews
            });
            
          
          
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

  const toggleReview =  () => {
    setOpenReview(!openReview);
  }

  const plusItem =(event,name,menu)=>{
    let targetId = event.target.id;
    // console.log("+click",targetId);
    // let price=0;
    let item = name;
    // for(let i in menu){
    //   if(menu[i]["item"]===item){
    //     console.log("find",menu[i]["item"])
    //     price+=menu[i]["priceInCents"]
    //   }
    // }
  
      if(order && order[item]){
        let num = order[item];
        let price =order["price"];
        let single = 0;
        console.log("exist and add new",num);
        // console.log("add item",menu)
        // order[item]=num+1;
        // price+=menu[item]["priceInCents"];
        
        for(let i in menu){
        if(menu[i]["item"]===item){
          console.log("find",menu[i]["item"])
          price+=menu[i]["priceInCents"];
          }
        }
        order[item]=[num+1,single];
        order["price"]=price;
      }else{
        let price=0;
        let single = 0;
        for(let i in menu){
          if(menu[i]["item"]===item){
            console.log("find",menu[i]["item"])
            price+=menu[i]["priceInCents"]
            single=menu[i]["priceInCents"];
          }
        }
        order[item]=[1,single];
        order["price"]=price;
      }
      order["menu"]=menu;
      setOrder(order);
      console.log("order=",order)
      handleOrder();
    }
  const minusItem=(event,name)=>{
    let targetId = event.target.id;
    console.log("-click",targetId);
    let item = name;
    if(order && order[item]){
      let num = order[item];
      console.log("exist and minus",num);
      order[item]=num-1;
    }
    setOrder(order);
    setCart(true);
    console.log("order=",order)
    handleOrder();
  }
  const handleOrder=()=>{
    for (const property in order) {
      sessionStorage.setItem(property, order[property]);
    }
    // let test = sessionStorage.getItem("item");
    console.log("session",sessionStorage);
  }
  return (
    <div>
    {cart && <Cart/>} 
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

        {/* {console.log("return data",result)} */}
        
        <div className={styles.content}>
          <h2 >
            {result.name}
          </h2>
          <p className={styles.wating}>{result.waiting} mins</p>
          <ul>
          
            {result.menu && 
            result.menu.map((elem,index)=>{
             
              return (
                <div key={index}>
                  <div className={styles.row}>
                  <p>{elem.item}</p>
                  <span>{elem.priceInCents/100}</span>
                  <div className={styles.row}>
                  <button id="minus" className={styles.smallBtn} onClick={(event)=>minusItem(event,elem.item)}>-</button>
                  <input type="number" value={order[elem.item]} />
                  <span>{order[elem.item]}</span>
                  <button id="plus" className={styles.smallBtn} onClick={(event)=>plusItem(event,elem.item,result.menu)}>+</button>
                  </div>
                  </div>
                  <p>{elem.itemDescription}</p>
                </div>
              )
            })}
          </ul>
          {/* <button className={styles.btn} onClick={handleOrder}>Checkout</button> */}
        </div>
        <button className={styles.drawerBtn} onClick={toggleReview}>Review</button>
        {openReview && <FoodReviewsCard />}
      </main>
      
      </div>
      
    }
    </div>
  )

}
