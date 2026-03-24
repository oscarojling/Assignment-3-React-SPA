import styles from "./Header.module.css";
import NavBar from "../NavBar";
import Logo from "../Logo";

const Header = ({ setPage }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar setPage={setPage} />
    </header>
  );
};

export default Header;
