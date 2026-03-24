import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FilmsPage from "./components/FilmsPage";
import FavouritesPage from "./components/FavouritesPage";

function App() {
  const [page, setPage] = useState(null);

  return (
    <>
      <Header setPage={setPage} />
      {!page && <HomePage />}
      {page === "films" && <FilmsPage />}
      {page === "favourites" && <FavouritesPage />}
    </>
  );
}

export default App;
