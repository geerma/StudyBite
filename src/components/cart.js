import styles from '@/styles/Modal.module.css';
import React, { useEffect, useRef, useState } from "react";

const Cart =()=>{
    const readSession =sessionStorage;
    console.log("read",readSession)
    let jsxArr=[];
    const genJsx=(key)=>{
        if(key!="price" && key!="menu" && key!="item"){
            
            return (
                <li key={key} className={styles.checkoutitem}>
                    <span>{key}</span>
                    <span>{readSession.getItem(key)[0]}</span>
                    {/* <span>$ {readSession.getItem(key)[2]}</span> */}
                </li>
            )
        }
    }
    for(let i=0; i<readSession.length; i++) {
        let key = readSession.key(i);
        console.log(`${key}: ${readSession.getItem(key)}`);
        jsxArr.push(genJsx(key));
      }
    
    return (
        
            <div className={styles.cart}>
                <h2>Your Cart</h2>
                <span className={styles.numdisplay}>$ {readSession.getItem("price")/100}</span>
                <ul>
                    {jsxArr}

                </ul>
            <a href="/checkout" className={styles.btn}>Pay</a>
            </div>
        
    )
}
export default Cart;