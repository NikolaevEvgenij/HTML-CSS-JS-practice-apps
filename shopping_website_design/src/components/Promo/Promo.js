import styles from "./Promo.module.css";
import "../../styles/common.css";
import promoImg from "../../img/fashion-images/images/header-img.jpg";
import Button from "../UI/Button/Button";

const Promo = () => {
   return (
      <section className={styles.promo}>
         <div className='container'>
            <div className={styles.content}>
               <div className={styles.info}>
                  <div className={styles.title}>
                     <span className={styles.highlight1}>LET'S</span>
                     EXPLORE
                     <span className={styles.highlight2}>UNIQUE</span>
                     CLOTHES
                  </div>
                  <div className={styles.desctiption}>
                     Live for Influential and Innovative fashion!
                  </div>
                  <div className={styles.purches}>
                     <Button />
                  </div>
               </div>
               <div className={styles["promo-img"]}>
                  <img src={promoImg} alt='promo' />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Promo;
