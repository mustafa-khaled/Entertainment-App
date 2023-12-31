import { useSelector } from "react-redux";
import { useImage } from "../../hooks/useImage";
import Img from "../Img";
import Rating from "../Rating";
import ReleaseDate from "../ReleaseDate";

function ItemDetails({ data }) {
  const url = useSelector((state) => state?.home?.url);
  const posterPath = useImage(data?.poster_path);

  return (
    <div className="flex flex-col items-center justify-around gap-[20px] text-center md:flex-row md:items-start md:text-left">
      <Img
        src={posterPath}
        styles="w-[250px] rounded-xl"
        alt={data?.title || data?.name}
      />
      <div className="flex w-full flex-col gap-[10px] md:w-[60%]">
        <h1 className="text-4xl">{data?.title || data?.name}</h1>

        <div className="flex items-center justify-center gap-[10px] md:justify-start">
          <Rating item={data} />
          {data?.production_companies?.map(
            (im) =>
              im?.logo_path && (
                <div
                  key={im?.logo_path}
                  className="flex items-center justify-center rounded-xl bg-colorGreyishBlue p-[5px]"
                >
                  <Img
                    src={im?.logo_path && url + im?.logo_path}
                    alt={data?.title || data?.name}
                    styles="w-[40px]"
                  />
                </div>
              ),
          )}
        </div>

        <p className="text-sm">
          Overview:{" "}
          <span className="text-colorGreyishBlue">{data?.overview}</span>
        </p>

        <p className="text-sm ">
          Language:{" "}
          <span className="text-colorGreyishBlue">
            {data?.original_language}
          </span>
        </p>

        <div className="flex items-center justify-center gap-[5px] md:justify-start">
          Release Date:
          <ReleaseDate item={data} />
        </div>

        <div className="bg-red-400= flex items-center justify-center gap-[10px] text-sm md:justify-start">
          Genres:
          {data?.genres?.map((it) => (
            <p key={it?.id} className="rounded-xl bg-colorGreyishBlue p-[5px] ">
              {it?.name}
            </p>
          ))}
        </div>

        <p className="text-sm ">
          Status: <span className="text-colorGreyishBlue">{data?.status}</span>
        </p>
      </div>
    </div>
  );
}

export default ItemDetails;
