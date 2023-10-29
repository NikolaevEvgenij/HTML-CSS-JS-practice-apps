import styles from "./Header.module.css";
import logoImg from "../../img/fashion-images/icons/logo.svg";
import "../../styles/common.css";

const Header = () => {
   return (
      <header className={styles.header}>
         <div className='container'>
            <div className={styles.row}>
               <div className={styles.logo}>
                  <img src={logoImg} alt='logo' />
                  <span>Fashion</span>
               </div>
               <div className={styles.nav}>
                  <nav>
                     <ul>
                        <li>
                           <a href='#!'>Catalogue</a>
                        </li>
                        <li>
                           <a href='#!'>Fashion</a>
                        </li>
                        <li>
                           <a href='#!'>Favourite</a>
                        </li>
                        <li>
                           <a href='#!'>Lifestyle</a>
                        </li>
                     </ul>
                  </nav>
                  <button className={styles.sign_button}>
                     Sign up
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
