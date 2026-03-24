import styles from './HeroSection.module.css'

const HeroSection = ({ title, subtitle, subTitle2 }) => {
return (
  <div className={styles.hero}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.subTitle}>{subtitle}</p>
    <p className={styles.subTitle2}>{subTitle2}</p>
  </div>
)
}

export default HeroSection