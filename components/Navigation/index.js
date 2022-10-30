import styles from "../../styles/Navigation.module.css";

const menu = ["Home", "What's New", "Menu", "Contact"];

function Navigation() {
  return (
    <nav className={styles.main}>
      <div className={styles.logoContainer}>
        <h1>Logo</h1>

        <div className={styles.hamburger}>
          <img src="logo" alt="" />
        </div>
      </div>

      <div className={styles.menuContainer}>
        {menu.map((item) => {
          return (
            <div className={styles.menuItem}>
              <a href="">{item}</a>
            </div>
          );
        })}
        <div className={styles.searchItem}>
          <input type="text" name="" id="" />
        </div>
      </div>

      <div className={styles.mobileMenu}>
        {menu.map((item) => {
          return (
            <div className={styles.menuItem}>
              <a href="">{item}</a>
            </div>
          );
        })}
        <div className={styles.searchItem}>
          <input type="text" name="" id="" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
