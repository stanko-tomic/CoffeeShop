import styles from "../../styles/Main.module.css";
import { motion } from "framer-motion";

function MainPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <article className={styles.details}>
            <h1 className={styles.detailsText}>HOT COFFEE</h1>
            <p className={styles.detailsDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              facilis voluptate similique architecto, ipsum quasi cupiditate
              laudantium! Voluptatibus, cumque eligendi!
            </p>
            <a href="" className={styles.detailsLink}>
              Learn more
            </a>
          </article>
          <div className={styles.image}>
            <motion.div
              animate={{
                rotate: [0, 1, -1, 0, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              transformValues=""
              className={styles.image}
            >
              <img src="/cup.png" alt="" />
            </motion.div>

            <div className={styles.picker}>
              <div className={styles.pick} style={{ background: "red" }}></div>
              <div
                className={styles.pick}
                style={{ background: "green" }}
              ></div>
              <div className={styles.pick} style={{ background: "blue" }}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
