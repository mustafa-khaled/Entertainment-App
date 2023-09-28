import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Img from "./Img";
import ReleaseDate from "./ReleaseDate";
import Rating from "./Rating";
import noPoster from "/no-poster.png";

function Item({ item, backdrop, endPoint }) {
  const { url } = useSelector((state) => state?.home);

  // If a normal section i well display  poster image only trending section is unique image
  const poserPath = item?.poster_path
    ? url?.poster + item?.poster_path
    : noPoster;
  // If trending section i well display  backdrop image
  const backdropPath = item?.backdrop_path
    ? url?.poster + item?.backdrop_path
    : noPoster;

  return (
    <Link to={`/${item?.media_type || endPoint}/${item?.id}`}>
      <Img
        src={backdrop ? backdropPath : poserPath}
        styles="w-full rounded-xl"
        alt={item?.title || item?.name}
      />
      <h3 className="mb-[5px] mt-[10px] text-sm">
        {item?.title || item?.name}
      </h3>
      <div className="flex items-center justify-between">
        <ReleaseDate item={item} />
        <Rating item={item} />
      </div>
    </Link>
  );
}

export default Item;
