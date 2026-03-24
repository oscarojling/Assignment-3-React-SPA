import styles from "./NavBar.module.css";

const NavBar = ({ setPage }) => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem} onClick={() => setPage(null)}>
          Home
        </li>
        <li className={styles.navItem} onClick={() => setPage("films")}>
          Films
        </li>
        <li className={styles.navItem} onClick={() => setPage("favourites")}>
          Favourites
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
