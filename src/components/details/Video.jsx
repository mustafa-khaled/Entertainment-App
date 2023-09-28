import { Link } from "react-router-dom";
import Img from "../Img";
import defaultVideoImage from "/defaultVideoThumbnail.jpg";

function Video({ item }) {
  const youtubeThumbnailUrl = `https://img.youtube.com/vi/${item?.key}/mqdefault.jpg`;

  return (
    <Link to={`https://www.youtube.com/watch?v=${item.key}`} target="_blank">
      <div className="relative">
        <i className="fa-regular fa-circle-play absolute left-[50%] top-[50%] z-10 translate-x-[-50%] translate-y-[-50%]  text-3xl hover:text-colorRed"></i>
        {item?.key && (
          <Img
            src={youtubeThumbnailUrl || defaultVideoImage}
            styles="w-full object-cover"
            alt={item?.name || item?.title}
          />
        )}

        <h3 className="bg-colorGreyishBlue p-[5px] text-center text-sm text-colorSemiDarkBlue">
          {item?.name}
        </h3>
      </div>
    </Link>
  );
}

export default Video;
