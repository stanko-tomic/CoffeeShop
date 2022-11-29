import styles from "../styles/Nav.module.css";
import { motion, useCycle } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "What's New",
    link: "/new",
  },
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Nav() {
  const [open, cycleOpen] = useCycle(false, true);
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src="logo.svg" alt="" />
          <div className={styles.mobileHamburger}>
            <BiMenuAltRight onClick={cycleOpen} />
          </div>
        </div>
        <div className={styles.menuContainer}>
          {menu.map((item, index) => {
            return (
              <div key={`nav-items-${index}-${item}`} className={styles.item}>
                <Link href={item.link} key={`nav-item-${index}-${item.name}`}>
                  {item.name}
                </Link>
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
              <div>
                <img src="logo.svg" alt="" />
              </div>
              <IoClose onClick={cycleOpen} />
            </div>
            <div className={styles.mobileItems}>
              {menu.map((item, index) => {
                return (
                  <div
                    key={`nav-items-mobile-${index}-${item.name}`}
                    onClick={cycleOpen}
                    className={styles.item}
                  >
                    <Link
                      href={item.link}
                      key={`nav-item-mobile-${index}-${item}`}
                    >
                      {item.name}
                    </Link>
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
