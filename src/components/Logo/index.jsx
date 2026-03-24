import logo from "../../assets/images/logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return <img className={styles.logo} src={logo} alt="logo"></img>;
};

export default Logo;
