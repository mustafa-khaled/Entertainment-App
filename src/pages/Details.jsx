import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import Error from "../components/Error";
import Loader from "../components/Loader";
import Credits from "../components/details/Credits";
import ItemDetails from "../components/details/ItemDetails";
import Videos from "../components/details/Videos";
import Similar from "../components/details/Similar";

function Details() {
  const { mediaType, id } = useParams();
  const title = mediaType === "tv" ? "Similar Tv Shows" : "Similar Movies";
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

  const {
    data: similar,
    loading: similarLoading,
    error: similarError,
  } = useFetch(`/${mediaType}/${id}/similar`);

  if (loading || creditsLoading || videosLoading || similarLoading)
    return <Loader />;
  if (error || creditsError || videosError || similarError)
    return <Error massage={"There Was An error fetch The Data."} />;

  return (
    <>
      <ItemDetails data={data} />
      <Credits credits={credits} />

      {videos?.results?.length > 0 && <Videos videos={videos} />}

      <Similar title={title} data={similar} endPoint={mediaType} />
    </>
  );
}

export default Details;
