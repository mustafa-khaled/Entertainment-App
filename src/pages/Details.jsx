import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import Error from "../components/Error";
import Loader from "../components/Loader";
import Credits from "../components/details/Credits";
import ItemDetails from "../components/details/ItemDetails";
import Videos from "../components/details/Videos";

function Details() {
  const { mediaType, id } = useParams();
  const { data, loading, error } = useFetch(`/${mediaType}/${id}`);
  const {
    data: credits,
    loading: creditsLoading,
    error: creditsError,
  } = useFetch(`/${mediaType}/${id}/credits`);

  const {
    data: videos,
    loading: videosLoading,
    error: videosError,
  } = useFetch(`/${mediaType}/${id}/videos`);

  if (loading || creditsLoading || videosLoading) return <Loader />;
  if (error || creditsError || videosError)
    return <Error massage={"There Was An error fetch The Data."} />;

  return (
    <>
      <ItemDetails data={data} />
      <Credits credits={credits} />
      <Videos Videos={videos} />
    </>
  );
}

export default Details;
