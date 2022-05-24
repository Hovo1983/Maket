import React from 'react'
import styles from './Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.conteiner}>
        <div className={styles.text}>
            <img src='Img/Cootels.svg'/>
             <p>Your Best Private Hideway From Crowd. Back to Nature.</p>
        </div>
         <div className={styles.icon}>
           <InstagramIcon style={{fontSize:'64px'}}/>
           <FacebookIcon style={{fontSize:'64px'}}/>
           <TwitterIcon style={{fontSize:'64px'}}/>
         </div>
      </div>
      <div className={styles.footer_list}>
        <ul>Rooms
           <li><a href='#'>Single Room</a></li>
           <li><a href='#'>Double Room</a></li>
           <li><a href='#'>Cabin</a></li>
           <li><a href='#'>Custom Room</a></li>
        </ul>
        <ul>Reservation
           <li><a href='#'>See the Steps</a></li>
           <li><a href='#'>Best Time</a></li>
        </ul>
        <ul>Contact
           <li><a href='#'>Our Number</a></li>
           <li><a href='#'>Our Email</a></li>
           <li><a href='#'>Our Location</a></li>
        </ul>
      </div>
    </footer>
  )
}




