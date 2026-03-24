import { favourites } from "../../data/films";
import FilmGrid from "../FilmGrid";

const FavouritesPage = () => {
  return (
  <FilmGrid films={favourites} type="favourites" />
  );
};

export default FavouritesPage;
