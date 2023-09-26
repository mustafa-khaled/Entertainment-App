import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import SectionHeader from "./SectionHeader";
import ItemsSwiper from "./ItemsSwiper";
import Loader from "./Loader";
import Error from "./Error";

function TopRating() {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading, error } = useFetch(`/${endPoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  if (error) return <Error massage={"There Was An error fetch The Data."} />;

  return (
    <div>
      <SectionHeader
        title="Top Rating"
        tabs={["Movies", "TV Shows"]}
        onTabChange={onTabChange}
      />
      {loading ? (
        <Loader smallLoader={true} />
      ) : (
        <ItemsSwiper data={data?.results} endPoint={endPoint} />
      )}
    </div>
  );
}

export default TopRating;
