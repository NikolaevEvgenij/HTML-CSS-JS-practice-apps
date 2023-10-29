import styles from "./Card.module.css";

import Arrow from "../../img/fashion-images/icons/arrow.svg";

const Card = (props) => {
   return (
      <>
         <li className={styles.category} id='category'>
            <a href='#!'>
               <div className={styles.image}>
                  <img src={props.img} alt={props.alt} />
               </div>
               <div className={styles.caption}>
                  <div className={styles.text}>
                     <p className={styles.title}>{props.title}</p>
                     <p className={styles.desc}>Explore Now!</p>
                  </div>
                  <div className={styles.arrow}>
                     <img src={Arrow} alt='Arrow' />
                  </div>
               </div>
            </a>
         </li>
      </>
   );
};

export default Card;
