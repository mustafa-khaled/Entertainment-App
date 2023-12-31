import { Link } from "react-router-dom";
import { useImage } from "../hooks/useImage";
import Img from "./Img";
import ReleaseDate from "./ReleaseDate";
import Rating from "./Rating";

function Item({ item, backdrop, endPoint }) {
  const poserPath = useImage(item?.poster_path);
  const backdropPath = useImage(item?.backdrop_path);

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
