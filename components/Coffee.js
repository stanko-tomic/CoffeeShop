import styles from "../styles/Coffee.module.css";
import { FiCoffee } from "react-icons/fi";
import { GiDonut } from "react-icons/gi";
import { BiCookie } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Coffee() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-5%" }}
      whileInView={{ opacity: 1, y: "0%" }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={styles.main}
    >
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <div className={styles.left}>
            <h1>
              Midnight <span className="block">Frappucino</span>
            </h1>
            <p>
              The Midnight Mint Mocha Frappuccino features extra dark cocoa
              blended with Frappuccino Roast Coffee.
            </p>
            <h4 className={styles.price}>$ 8.60</h4>
          </div>
          <div className={styles.middle}>
            <img src="/testcup.png" alt="" />
          </div>
          <div className={styles.right}>
            <div className={styles.feature}>
              <div className={styles.imgFeature}>
                <FiCoffee />
              </div>
              <div className={styles.featureText}>
                <h5>Sippy cups</h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.imgFeature}>
                <GiDonut />
              </div>
              <div className={styles.featureText}>
                <h5>Sippy cups</h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.imgFeature}>
                <BiCookie />
              </div>
              <div className={styles.featureText}>
                <h5>Sippy cups</h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
