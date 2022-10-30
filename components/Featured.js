import styles from "../styles/Featured.module.css";
import { FiCoffee } from "react-icons/fi";
import { GiDonut } from "react-icons/gi";
import { BiCookie } from "react-icons/bi";

export default function Featured() {
  return (
    <main className={styles.main}>
      <div className={styles.gridContainer}>
        <div className={styles.middle}>
          <img src="/testcup.png" alt="" />
          <h4>Caramel Frappuccino</h4>
          <a href="">Order it</a>
        </div>
        <div className={styles.middle}>
          <img src="/testcup.png" alt="" />
          <h4>Caramel Frappuccino</h4>
          <a href="">Order it</a>
        </div>
        <div className={styles.middle}>
          <img src="/testcup.png" alt="" />
          <h4>Caramel Frappuccino</h4>
          <a href="">Order it</a>
        </div>
      </div>
    </main>
  );
}
