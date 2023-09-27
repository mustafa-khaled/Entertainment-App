// Swiper For the trending section and a normal swiper for the rest of the app
import { Swiper, SwiperSlide } from "swiper/react";
import { formatDate } from "../utils/helpers";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { itemSwiperBreakpoints } from "../data/data";
import "swiper/css/navigation";
import "swiper/css";
import noPoster from "/no-poster.png";

function ItemsSwiper({ data, endPoint, trendingBreakpoints, trending }) {
  const { url } = useSelector((state) => state?.home);

  return (
    <Swiper
      className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
      spaceBetween={30}
      // Display different break point
      breakpoints={trendingBreakpoints || itemSwiperBreakpoints}
    >
      {data?.map((item) => {
        // If a normal section i well display  poster image only trending section is unique image
        const poserPath = item?.poster_path
          ? url?.poster + item?.poster_path
          : noPoster;
        // If trending section i well display  backdrop image
        const backdropPath = item?.backdrop_path
          ? url?.poster + item?.backdrop_path
          : noPoster;

        const formattedDate = formatDate(
          item?.release_date || item?.first_air_date,
        );

        return (
          <SwiperSlide key={item.id} className="relative cursor-pointer">
            <Link to={`${item.media_type || endPoint}/${item?.id}`}>
              <img
                src={trending ? backdropPath : poserPath}
                alt={item.title || item.name}
                className="w-full rounded-xl"
              />
              <div>
                <h3 className="mb-[5px] mt-[10px] text-sm">
                  {item?.title || item?.name}
                </h3>
                <p className="text-xs text-colorGreyishBlue ">
                  {formattedDate}
                </p>

                {!trending && (
                  <div>
                    <i className="fa-solid fa-star mr-[5px] text-sm text-yellow-500"></i>
                    <span className="text-sm text-colorGreyishBlue underline">
                      {Number.isInteger(item?.vote_average)
                        ? item?.vote_average + ".0"
                        : item?.vote_average}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ItemsSwiper;
