// Swiper For the trending section and a normal swiper for the rest of the app
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { regularSwiperBreakpoints, bigSwiperBreakpoints } from "../data/data";
import "swiper/css/navigation";
import "swiper/css";
import noPoster from "/no-poster.png";

import Item from "./Item";
import CastItem from "./CastItem";

function Swiper({ data, endPoint, type, backdrop }) {
  const { url } = useSelector((state) => state?.home);

  return (
    <ReactSwiper
      className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
      spaceBetween={30}
      // Display different break point
      breakpoints={
        type === "regular" || type === "cast"
          ? regularSwiperBreakpoints
          : bigSwiperBreakpoints
      }
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

        return (
          <SwiperSlide key={item?.id}>
            {type === "cast" ? (
              <CastItem item={item} />
            ) : (
              <Item
                backdrop={backdrop}
                item={item}
                endPoint={endPoint}
                backdropPath={backdropPath}
                poserPath={poserPath}
              />
            )}
          </SwiperSlide>
        );
      })}
    </ReactSwiper>
  );
}

export default Swiper;
