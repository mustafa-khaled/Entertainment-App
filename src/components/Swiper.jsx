import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import { regularSwiperBreakpoints, bigSwiperBreakpoints } from "../data/data";
import "swiper/css/navigation";
import "swiper/css";

import Item from "./Item";
import Cast from "./details/Cast";
import Video from "./details/Video";

function Swiper({ data, endPoint, type = "regular", backdropImage }) {
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
        return (
          <SwiperSlide key={item?.id}>
            {type === "cast" && <Cast item={item} />}
            {type === "videos" && <Video item={item} />}

            {type !== "cast" && type !== "videos" && (
              <Item backdrop={backdropImage} item={item} endPoint={endPoint} />
            )}
          </SwiperSlide>
        );
      })}
    </ReactSwiper>
  );
}

export default Swiper;
