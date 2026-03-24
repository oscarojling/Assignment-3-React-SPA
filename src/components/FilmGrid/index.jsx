import FilmCard from "../FilmCard";
import styles from "./FilmGrid.module.css";

const FilmGrid = ({ films, type }) => {
  return (
    <div className={`${styles.wrapper} ${styles[type]}`}>
      {films.map((film, index) => (
        <FilmCard
          key={index}
          title={film.title}
          year={film.year}
          genre={film.genre}
          image={film.image}
          imdb={film.imdb}
          rt={film.rt}
          rating={film.rating}
        />
      ))}
    </div>
  );
};

export default FilmGrid;
