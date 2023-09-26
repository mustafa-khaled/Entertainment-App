import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { trendingSwiperBreakpoints } from "../data/data";

import SectionHeader from "./SectionHeader";
import Loader from "./Loader";
import Error from "./Error";
import ItemsSwiper from "./ItemsSwiper";

function Trending() {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading, error } = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  if (error) return <Error massage={"There Was An error fetch The Data."} />;

  return (
    <div>
      <SectionHeader
        title="Trending"
        tabs={["Day", "Week"]}
        onTabChange={onTabChange}
      />

      {loading ? (
        <Loader smallLoader={true} />
      ) : (
        <ItemsSwiper
          data={data?.results}
          trendingBreakpoints={trendingSwiperBreakpoints}
          trending={true}
        />
      )}
    </div>
  );
}

export default Trending;
