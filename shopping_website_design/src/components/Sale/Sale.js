import styles from "./Sale.module.css";
import "../../styles/common.css";

import SaleImg from "../../img/fashion-images/images/promo-img.jpg";

import Button from "../UI/Button/Button";

const Sale = () => {
   return (
      <section className={styles.sale}>
         <div className='container'>
            <div className={styles.content}>
               <div className={styles.img}>
                  <img src={SaleImg} alt="sale's woman" />
               </div>
               <div className={styles.info}>
                  <div className={styles.title}>
                     <span>PAYDAY</span> SALE NOW
                  </div>
                  <div className={styles.desc}>
                     Spend minimal $100 get 30% off voucher code for
                     your next purchase
                  </div>
                  <div className={styles.date}>
                     1 June - 10 June 2021
                  </div>
                  <div className={styles.terms}>
                     *Terms & Conditions apply
                  </div>
                  <div className={styles.button}>
                     <Button />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Sale;
