import React, { useEffect, useState } from "react";
import styles from "@/styles/Dropdown.module.css";

const ProfileDropdown = () => {
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
        <div className={styles.dropdown}>
            <div className={styles.dropdown_description} onClick={handleClick}>Update Profile</div>
            <div style={{display:display}} className={styles.dropdownBlock}>
                <br></br>
                <div className={styles.dropdown_form}>
                    <label for="fname">First Name:</label><br></br>
                    <input type="text" id="fname" name="fname"></input><br></br>
                    <label for="lname">Last Name:</label><br></br>
                    <input type="text" id="lname" name="lname"></input><br></br>
                    <label for="email">Email:</label><br></br>
                    <input type="text" id="email" name="email"></input><br></br>
                    <button className={styles.updateButton}>Update</button>
                </div>
            </div>
        </div>
  );
};

export default ProfileDropdown;