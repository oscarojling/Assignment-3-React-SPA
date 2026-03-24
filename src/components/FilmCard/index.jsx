import styles from "./FilmCard.module.css";
import { getImageURL } from "../../utils/image";

const FilmCard = ({ title, year, genre, rating, imdb, rt, image }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <img src={getImageURL(image)} alt={title} className={styles.image}></img>
      <p className={styles.year}>Year of release: {year}</p>
      <p className={styles.genre}>Genre: {genre}</p>
      <p className={styles.rating}>My rating: {rating}</p>
      <a className={styles.link} href={imdb}>IMDB</a>
      <a className={styles.link} href={rt}>Rotten Tomatoes</a>
    </div>
  );
};
export default FilmCard;
