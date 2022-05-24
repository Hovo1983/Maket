import React from 'react'
import styles from './Contacts.module.css'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import useToggle from '../../../Toggle';



export default function Contacts() {
  const [show,shown] = useToggle(false)
  return (
    <section className={styles.cont_contacts}>
         <div className={styles.cont_1}>
           <div className={styles.box_1}>             
             <span>Start your journey!</span>
             <h3>How to Get My Room?</h3>
             <p>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</p>
           </div>
           <div className={styles.buttons}>
             <button>Contact us</button>
             <span><a href='#'>Explore more room</a></span>
           </div>
         </div>
         <div className={styles.cont_2}>
              <div className={styles.child}> 
              <div className={styles.text_icon}>            
                   <h4>1.Choose a room and date</h4>
                   < ExpandMoreOutlinedIcon className={styles.icons} onClick={shown}></ ExpandMoreOutlinedIcon>                   
              </div> 
              {show ? <p>Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.</p> : null}
              </div>
                 <div className={styles.child}>
                   <div className={styles.text_icon}>
                   <h4>2. Check for room availability</h4>
                   < ExpandMoreOutlinedIcon className={styles.icons} onClick={shown}></ ExpandMoreOutlinedIcon>
                   </div>
                   {show ? <p>Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.</p> : null}                   
                  </div> 
               <div className={styles.child}>
               <div className={styles.text_icon}>
                 <h4>3. Enjoy your room</h4>
                 < ExpandMoreOutlinedIcon className={styles.icons} onClick={shown}></ ExpandMoreOutlinedIcon>
                 </div>
                 {show ? <p>Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.</p> : null}
               </div>
         </div>
    </section>
  )
}
