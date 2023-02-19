import React, { useEffect, useState } from "react";
import styles from "@/styles/Dropdown.module.css";

const TransactionHistory = ({ userData }) => {
    const transactions = userData.transactionHistory;
    const [display, setDisplay] = useState('none');

    const handleClick = () => {
        console.log("clicked");
        console.log(display);
        if(display == 'none'){
            setDisplay('block');
        } else {
            setDisplay('none');
        }
    }

  return (
        <div className={styles.dropdown_item}>
            <div onClick={handleClick}>Order History</div>
            <div style={{display:display}}>
                {transactions && transactions.map((item, id) => ( 
                    <div key={id}>
                        <br></br>
                        <p>Location: { item.Location}</p>
                        <p>Total: ${ item.finalCostCents / 100}</p>
                        <p>Time: { item.time }</p>
                    </div>
                ))}
            </div>
        </div>
  );
};

export default TransactionHistory;