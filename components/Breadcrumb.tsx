import React, { useState, useEffect, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "react-bootstrap/Image";
import { FiHome, FiChevronRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

import styles from "./Breadcrumb.module.css";

const style = {
  opacity: "0.3",
  marginLeft: "5px"
};
//Breadcrumb Verileri Apide olmadığı için Dummy olarak Basıldı

const data =[
  'Elektronik', 'Telefon','Cep Telefonu','Apple Cep Telefonu'
]

const Breadcrumb = () => {
  return (
    <div className="mt-2 mb-2">
      <Swiper
        spaceBetween={0}
        slidesPerView={"auto"}
        className={styles.bcumbSlider}
      >
        <SwiperSlide className={styles.bcumbSliderItem}>
            <FiHome style={style} className={styles.b_item_home} />
            <FiChevronRight style={style} />
        </SwiperSlide>

        {
          data.map((item,index) =>(
             <SwiperSlide key={index} className={styles.bcumbSliderItem}>
              <a className={styles.itemSlider_link}>{item}</a>
              {index !== data.length-1 && <FiChevronRight style={style} /> } 
             
          </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="mt-3 mb-2">
           <a className={styles.brandName} href="#">Apple</a>
           <FiChevronRight  className={styles.brandRightIcon} /> 
       </div>
    </div>
  );
};

export default Breadcrumb;
