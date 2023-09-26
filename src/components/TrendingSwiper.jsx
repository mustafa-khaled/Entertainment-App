import { Swiper, SwiperSlide } from "swiper/react";
import { formatDate } from "../utils/helpers";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css";
import noPoster from "/no-poster.png";

function TrendingSwiper({ data }) {
  const { url } = useSelector((state) => state.home);

  return (
    <Swiper
      className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
      spaceBetween={30}
      breakpoints={{
        350: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },

        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {data?.map((item) => {
        const backdropPath = item.backdrop_path
          ? url.poster + item.backdrop_path
          : noPoster;

        const formattedDate = formatDate(
          item?.release_date || item?.first_air_date,
        );

        return (
          <SwiperSlide key={item.id} className="relative cursor-pointer">
            <Link to={`${item?.media_type}/${item?.id}`}>
              <img
                src={backdropPath}
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
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default TrendingSwiper;
