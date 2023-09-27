import { Link } from "react-router-dom";
import Img from "../Img";

function Video({ item }) {
  return (
    <Link to={`https://www.youtube.com/watch?v=${item.key}`} target="_blank">
      <Img
        src={`https:img.youtube.com/vi/${item.key}/mqdefault.jpg`}
        styles="w-full"
        alt={item?.name || item?.title}
      />
      <h3 className="bg-colorGreyishBlue p-[5px] text-center text-sm text-colorSemiDarkBlue">
        {item?.name}
      </h3>
    </Link>
  );
}

export default Video;
