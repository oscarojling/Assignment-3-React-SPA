import HeroSection from "../HeroSection";
import styles from "./HomePage.module.css";
import InfoCard from "../ProfileCard";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="My 2026 Watchlist"
        subtitle="18 films logged so far in 2026, lots of crime, thriller and some
        classics that I've rewatched!"
        subTitle2="Browse the films I've watched this year or check out my favourites so far."
      />
      <div className={styles.about}>
        <h2>My Favourites of All Time</h2>
        <div className={styles.wrapper}>
          <InfoCard
            title="Favourite Director"
            name="David Fincher"
            type="director"
          />
          <InfoCard title="Favourite Film" name="Trollsommar" type="film" />
          <InfoCard title="Favourite Actor" name="Al Pacino" type="actor" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
