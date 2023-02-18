import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'



function Map(props) {
    const [result, setResult] = useState([]);
    const [request, setRequest] = useState([]);

    // useEffect(() => {
    //     // Show location information
    //     const getLocations = async () => {
            
    //         try {
    //             const response = await axios.get(
    //                     ""
    //                     );
    //                 const resp = response.data;
                
    //                 } catch (ex) {
    //                 console.error(ex);
    //                 }
             
    //         };
    //         getLocations();
            
    //       }, [request]);
        
         
    return (
      <div id="map">
        <h2 className={styles.description}>This is a map placeholder</h2>
        
      </div>
    );
  }
  
  export default Map;
  