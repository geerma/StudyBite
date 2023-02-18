import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import RestaurantCard from '../components/RestaurantCard'

const inter = Inter({ subsets: ['latin'] })

export default function Restaurant() {
  return (
    <>
      <Head>
        <title>Restudy | Restaurant</title>
        <meta name="description" content="Rate restaurnay and study place on campus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
          <h2 className={styles.description}>
            Restaurant
          </h2>
          <p className={styles.description}>Test RestaurantCard</p>
         
          <RestaurantCard name={"test name"} restId={"abc123"} rating={3} hours={"temp hours"} description={"Hello World"}/>
          
      </main>
    </>
  )
}
