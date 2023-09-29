import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import { regularSwiperBreakpoints, bigSwiperBreakpoints } from "../data/data";
import "swiper/css/navigation";
import "swiper/css";
import React from "react";

function Swiper({ data, type = "regular", children }) {
  return (
    <ReactSwiper
      className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
      spaceBetween={30}
      breakpoints={
        type === "regular" ? regularSwiperBreakpoints : bigSwiperBreakpoints
      }
    >
      {data?.map((item) => (
        <SwiperSlide key={item?.id}>
          {React.Children.map(children, (child) => {
            // Clone each child and pass appropriate props
            return React.cloneElement(child, {
              item,
              type,
            });
          })}
        </SwiperSlide>
      ))}
    </ReactSwiper>
  );
}

export default Swiper;
