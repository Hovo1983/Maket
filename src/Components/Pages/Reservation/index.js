import React from 'react'
import styles from './Reservation.module.css'

export default function Reservation() {
  return (
    <div className={styles.cont}>
       <div className={styles.reserv}>
         <h2>Nature, Warmth, and Beauty in One Space</h2>
         <p>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</p>
         <button>Reservation</button>
       </div>
       <div className={styles.pic}>
         <div className={styles.pict1}></div>
         <div className={styles.pict2}></div>
         <div className={styles.pict3}></div>
       </div>
    </div>
  )
}
