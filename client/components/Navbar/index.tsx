import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
   return (
      <>
         <nav className={styles.navbar}>
            <h1>FINOTE</h1>
            <ul className={styles["items-container"]}>
               <li>
                  <Link href="/login" className={styles.item}>
                     Keuangan Grup
                  </Link>
               </li>
               <li>
                  <Link href="#" className={styles.item}>
                     Keuangan Pribadi
                  </Link>
               </li>
               <li className={styles.item}>
                  <button type="button" className="btn-danger-outline">
                     Keluar
                  </button>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Navbar;
