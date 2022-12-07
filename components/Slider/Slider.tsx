import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "react-bootstrap/Image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
  
const Slider = ()  => {
   const items = useSelector((state: RootState) => state.responseData);

  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="img-slider"
      centeredSlides={true}
      autoHeight={true}
    >
      {items.sliderImage?.map((item, key) => (
        <SwiperSlide key={key} className={"img-1-type"}>
          <Image src={item.imageUrl} alt={items.itemName}></Image>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
