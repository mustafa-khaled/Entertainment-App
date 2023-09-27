import { formatDate } from "../utils/helpers";

function ReleaseDate({ item }) {
  const formattedDate = formatDate(item?.release_date || item?.first_air_date);
  return <p className="text-xs text-colorGreyishBlue ">{formattedDate}</p>;
}

export default ReleaseDate;
