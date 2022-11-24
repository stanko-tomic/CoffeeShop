import Link from "next/link";
import styles from "../styles/Featured.module.css";

import { getAllCoffee } from "../lib/coffeedata";
import { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";

export default function Featured() {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    setCoffeeData(getAllCoffee);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.gridContainer}>
        {coffeeData.map((coffee) => {
          return (
            <Link
              key={`${coffee.id}-${coffee.slug}`}
              href={`/coffee/${coffee.slug}`}
              className={styles.middle}
            >
              <img src={coffee.coverImage} alt="" />
              <h4>{coffee.title}</h4>
              <p className={styles.linkText}>
                Order it <BsCart2 />
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
