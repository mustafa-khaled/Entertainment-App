import Popular from "../components/Popular";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";

function Home() {
  return (
    <div>
      <SearchBar />
      <Trending />
      <Popular />
    </div>
  );
}

export default Home;
