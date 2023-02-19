import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Restaurant() {

  const [renderBool, setRender] = useState(true);
  const [result, setResult] = useState([]);
  const router = useRouter()
  const { restId } = router.query
  
  console.log("restId=",restId);

  const damiData =[
    {"id":"1","name":"Bad Earth","waiting":30,"menu":"probably need array"},
    {"id":"2","name":"Topway","waiting":5,"menu":"Topway menu probably need array"}
  ]

    const getData=()=>{
      // get restaruant info
      const match = damiData.filter(obj => {
        return obj.id === restId
      })
      if(match.length>0 && renderBool){
        setResult(match[0]);
        setRender(false);
      }    
    }
    getData();
  console.log("call restaurant",result);
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
      
      <main className={styles.main}>

        {console.log("return data",result)}
        
        <div>
          <h2 className={styles.description}>
            {result.name}
          </h2>
          <p>{result.waiting} mins</p>
          <ul>
            {result.menu}
          </ul>
        </div>
       
      </main>
      
      </div>
    }
      
    </div>
  )


}
