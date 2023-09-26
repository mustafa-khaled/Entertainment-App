import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import SectionHeader from "./SectionHeader";
import ItemsSwiper from "./ItemsSwiper";

function Popular() {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/popular`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div>
      <SectionHeader
        title="What's Popular"
        tabs={["Movies", "TV Shows"]}
        onTabChange={onTabChange}
      />
      <ItemsSwiper data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
}

export default Popular;
