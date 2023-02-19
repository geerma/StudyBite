import React, { useEffect, useState } from "react";
import styles from "@/styles/Dropdown.module.css";

const ProfileDropdown = () => {
    const [display, setDisplay] = useState('none');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    const handleFNameChange = (e) => {
        setFirstName(e.target.value)
        console.log(firstName);
    }
    const handleLNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleClick = () => {
        console.log("clicked");
        console.log(display);
        if(display == 'none'){
            setDisplay('block');
        } else {
            setDisplay('none');
        }
    }

    const handleButton = () => {
        console.log("button press");
    }

  return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_description} onClick={handleClick}>Update Profile</div>
            <div style={{display:display}} className={styles.dropdownBlock}>
                <br></br>
                <div className={styles.dropdown_form}>
                    <label for="fname">First Name:</label><br></br>
                    <input type="text" id="fname" value={firstName} onChange={handleFNameChange}></input><br></br>
                    <label for="lname">Last Name:</label><br></br>
                    <input type="text" id="lname" value={lastName} onChange={handleLNameChange}></input><br></br>
                    <label for="email">Email:</label><br></br>
                    <input type="text" id="email" value={email} onChange={handleEmailChange}></input><br></br>
                    <button onChange={handleButton} className={styles.updateButton}>Update</button>
                </div>
            </div>
        </div>
  );
};

export default ProfileDropdown;