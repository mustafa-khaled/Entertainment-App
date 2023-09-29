import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import SectionHeader from "../sectionHeader/SectionHeader";
import Loader from "../Loader";
import Error from "../Error";
import Swiper from "../Swiper";
import Item from "../Item";

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
        <Swiper data={data?.results} type="big">
          <Item endPoint={endPoint} />
        </Swiper>
      )}
    </div>
  );
}

export default TopRating;
