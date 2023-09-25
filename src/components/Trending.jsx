import SectionHeader from "./SectionHeader";

import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

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
    </div>
  );
}

export default Trending;
