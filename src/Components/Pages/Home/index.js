import React from 'react'
import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={styles.homePage}>
        <div className={styles.photo}></div>
        <div className={styles.textbox}>
          <h3>Cozy and Down to Earth Cootage Hotel in Norway.</h3>
          <p>Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.</p>
          <p>Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.</p>
          <button>Learn more</button>
        </div>
    </section>
  )
}
