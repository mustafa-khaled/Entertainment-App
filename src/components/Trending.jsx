import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import SectionHeader from "./SectionHeader";
import Carousel from "./Carousel";

function Trending() {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading, error } = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div>
      <SectionHeader
        title="Trending"
        tabs={["Day", "Week"]}
        onTabChange={onTabChange}
      />
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
}

export default Trending;
