import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'



function Footer(props) {

    return (
      <footer id="mainFooter">
        <small className={styles.description}>This is a footer</small>
        
      </footer>
    );
  }
  
  export default Footer;