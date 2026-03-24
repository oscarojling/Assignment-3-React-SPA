import styles from "./ProfileCard.module.css";

const ProfileCard = ({ title, name, type }) => {
  return (
    <div className={`${styles.profileCard} ${styles[type]}`}>
      <div className={styles.profileText}>
        <h3>{title}</h3>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
