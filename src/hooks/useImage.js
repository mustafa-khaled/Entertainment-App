import { useSelector } from "react-redux";
import noPoster from "/no-poster.png";

export const useImage = (imagePath, tempImg) => {
  const url = useSelector((state) => state?.home?.url);
  return imagePath !== null ? url + imagePath : tempImg || noPoster;
};
