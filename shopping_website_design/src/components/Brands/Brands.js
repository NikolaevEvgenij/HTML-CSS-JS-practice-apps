import styles from "./Brands.module.css";
import "../../styles/common.css";

import HM from "../../img/fashion-images/brands/HM.png";
import Obey from "../../img/fashion-images/brands/Obey.png";
import Shopify from "../../img/fashion-images/brands/Shopify.png";
import Lacoste from "../../img/fashion-images/brands/Lacoste.png";
import Levis from "../../img/fashion-images/brands/Levis.png";
import Amazon from "../../img/fashion-images/brands/Amazon.png";

const Brands = () => {
   return (
      <section className={styles.brands}>
         <div className='container'>
            <div className={styles.brands_list}>
               <img src={HM} alt='HM' />
               <img src={Obey} alt='Obey' />
               <img src={Shopify} alt='Shopify' />
               <img src={Lacoste} alt='Laconste' />
               <img src={Levis} alt='Levis' />
               <img src={Amazon} alt='Amazon' />
            </div>
         </div>
      </section>
   );
};

export default Brands;
