import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Error from "../components/Error";
import Loader from "../components/Loader";
import noPoster from "/no-poster.png";
import { useSelector } from "react-redux";

function Details() {
  const { url } = useSelector((state) => state?.home);
  const { mediaType, id } = useParams();
  const { data, loading, error } = useFetch(`/${mediaType}/${id}`);

  if (loading) return <Loader />;
  if (error) return <Error massage={"There Was An error fetch The Data."} />;

  const backdropPath = data?.backdrop_path
    ? url?.poster + data?.backdrop_path
    : noPoster;

  return (
    <div>
      <img src={backdropPath} alt="" />
      {mediaType}
    </div>
  );
}

export default Details;
