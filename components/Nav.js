import styles from "../styles/Nav.module.css";
import { motion, useCycle } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const menu = ["Home", "What's New", "Menu", "Contact"];

export default function Nav() {
  const [open, cycleOpen] = useCycle(false, true);
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>Logo</h1>
          <div className={styles.mobileHamburger}>
            <BiMenuAltRight onClick={cycleOpen} />
          </div>
        </div>
        <div className={styles.menuContainer}>
          {menu.map((item, index) => {
            return (
              <div key={`nav-item-${index}`} className={styles.item}>
                <a href="#">{item}</a>
              </div>
            );
          })}
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className={styles.mobileMenu}
        >
          <div className={styles.mobileMenuContainer}>
            <div className={styles.close}>
              <h1 className={styles.logo}>Logo</h1>
              <IoClose onClick={cycleOpen} />
            </div>
            <div className={styles.mobileItems}>
              {menu.map((item, index) => {
                return (
                  <div
                    key={`nav-item-${index}`}
                    onClick={cycleOpen}
                    className={styles.item}
                  >
                    <a href="#">{item}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
