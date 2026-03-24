import films from "../../data/films";
import FilmGrid from "../FilmGrid";

const FilmsPage = () => {
  return (
    <FilmGrid films={films} />
  );
};

export default FilmsPage;
