import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

function Carousel({ data, loading }) {
  return (
    <Swiper
      className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
      spaceBetween={30}
      breakpoints={{
        300: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },

        900: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      {data?.map((item) => {
        return (
          <SwiperSlide key={item.id} className=" bg-red-400">
            {item.title || item.name}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousel;
