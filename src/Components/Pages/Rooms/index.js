import React from 'react'
import styles from './Rooms.module.css'

export default function Rooms() {
  return (
    <section className={styles.rooms}>
      <div className={styles.room_text}>
        <h3>Many Rooms to Choose</h3>
        <p>There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience</p>
        <button >Explore more</button>
      </div>
      <div className={styles.cont2}>
         
        <div className={styles.box}>
          <div className={styles.single}></div>        
          <h4>Single Room</h4>
          <p>Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.</p>
          <a href='#'><span>Learn more -></span></a>
          </div> 
          <div className={styles.box}> 
          <div className={styles.double}></div>        
          <h4>Double Room</h4>
          <p>Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two</p>
          <a href='#'><span>Learn more -></span></a>
        </div>
        <div className={styles.box}>
          <div className={styles.cootage}></div>        
          <h4>Cootage</h4>
          <p>Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends</p>
          <a href='#'><span>Learn more -></span></a>
        </div>
      </div>
    </section>
  )
}
