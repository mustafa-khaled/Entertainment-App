import Popular from "../components/Popular";
import SearchBar from "../components/SearchBar";
import TopRating from "../components/TopRating";
import Trending from "../components/Trending";

function Home() {
  return (
    <div>
      <SearchBar />
      <Trending />
      <Popular />
      <TopRating />
    </div>
  );
}

export default Home;
