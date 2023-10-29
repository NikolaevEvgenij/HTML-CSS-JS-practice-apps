import "../../styles/common.css";
import styles from "./NewArrivals.module.css";

import Card from "./Card";

import Cat1 from "../../img/fashion-images/categories/cat-01.jpg";
import Cat2 from "../../img/fashion-images/categories/cat-02.jpg";
import Cat3 from "../../img/fashion-images/categories/cat-03.jpg";

const categories = [
   {
      img: Cat1,
      title: "Hoodies & Sweetshirt",
      alt: "Girl in orange hoodie",
   },
   {
      img: Cat2,
      title: "Coats & Parkas",
      alt: "Girl in jacket and a hat",
   },
   {
      img: Cat3,
      title: "Tees & T-Shirt",
      alt: "Girl smiling",
   },
];

const NewArrivals = () => {
   return (
      <section className={styles.new_arrivals}>
         <div className='container'>
            <div className={styles.list_title}>
               NEW <span className={styles.highlight}>ARRIVALS</span>
            </div>
            <ul className={styles.list}>
               {categories.map((category) => {
                  return (
                     <Card
                        key={category.title}
                        img={category.img}
                        title={category.title}
                        alt={category.alt}
                     />
                  );
               })}
            </ul>
         </div>
      </section>
   );
};

export default NewArrivals;
