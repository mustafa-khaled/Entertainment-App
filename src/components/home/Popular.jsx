import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import SectionHeader from "../sectionHeader/SectionHeader";
import Loader from "../Loader";
import Error from "../Error";
import Swiper from "../Swiper";

function Popular() {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading, error } = useFetch(`/${endPoint}/popular`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  if (error) return <Error massage={"There Was An error fetch The Data."} />;

  return (
    <div>
      <SectionHeader
        title="What's Popular"
        tabs={["Movies", "TV Shows"]}
        onTabChange={onTabChange}
      />
      {loading ? (
        <Loader smallLoader={true} />
      ) : (
        <Swiper data={data?.results} endPoint={endPoint} />
      )}
    </div>
  );
}

export default Popular;
