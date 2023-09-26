import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import SectionHeader from "./SectionHeader";
import TrendingSwiper from "./TrendingSwiper";
import Loader from "./Loader";
import Error from "./Error";

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
        <TrendingSwiper data={data?.results} />
      )}
    </div>
  );
}

export default Trending;
