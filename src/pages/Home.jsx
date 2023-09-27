import Popular from "../components/home/Popular";
import SearchBar from "../components/home/SearchBar";
import TopRating from "../components/home/TopRating";
import Trending from "../components/home/Trending";

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
