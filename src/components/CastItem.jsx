import { useSelector } from "react-redux";
import user from "/user.png";
import Img from "./Img";

function CastItem({ item }) {
  const { url } = useSelector((state) => state?.home);

  const profilePath = item?.profile_path
    ? url?.poster + item?.profile_path
    : user;

  return (
    <div className="text-center">
      <Img
        src={profilePath}
        styles="rounded-full w-[120px] h-[120px] object-cover"
        alt={item?.title || item?.name}
      />
      <h4 className="text-sm text-colorGreyishBlue">
        {item?.name || item?.original_name}
      </h4>
    </div>
  );
}

export default CastItem;
