import styles from "../styles/Home.module.css";
import Coffee from "../components/Coffee";
import Featured from "../components/Featured";

import { getAllCoffee } from "../lib/coffeedata";

export default function Home() {
  const coffeeData = getAllCoffee();
  return (
    <div className={styles.container}>
      <Coffee data={coffeeData[0]} />
      <Featured />
    </div>
  );
}
