import { useImage } from "../../hooks/useImage";
import user from "/user.png";
import Img from "../Img";

function Cast({ item }) {
  const profileImage = useImage(item?.profile_path, user);

  return (
    <div className="text-center">
      <Img
        src={profileImage || user}
        styles="rounded-full w-[120px] h-[120px] object-cover"
        alt={item?.title || item?.name}
      />
      <h4 className="text-sm text-colorGreyishBlue">
        {item?.name || item?.original_name}
      </h4>
    </div>
  );
}

export default Cast;
