import React, { useState, useEffect, ChangeEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiHome, FiChevronRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
 

import styles from "./Breadcrumb.module.css";

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
            <FiHome  className={`${styles.b_item_home} ${styles.slideIcons}`} />
            <FiChevronRight  className={styles.slideIcons} />
        </SwiperSlide>

        {
          data.map((item,index) =>(
             <SwiperSlide key={index} className={styles.bcumbSliderItem}>
              <a className={styles.itemSlider_link}>{item}</a>
              {index !== data.length-1 && <FiChevronRight  className={styles.slideIcons} /> } 
             
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
