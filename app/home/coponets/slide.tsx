"use client";

import React from "react";
import Slider from "react-slick";
import styles from "../stayles/slide.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PauseOnHover = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const images = [
    "/slide_img/partner1.webp",
    "/slide_img/partner2.webp",
    "/slide_img/partner3.webp",
    "/slide_img/partner4.webp",
    "/slide_img/partner5.webp",
    "/slide_img/partner6.webp",
    "/slide_img/partner7.webp",
    "/slide_img/partner8.webp",
    "/slide_img/partner9.webp",
    "/slide_img/partner10.webp",
    "/slide_img/partner11.webp",
  ];

  return (
    <div className={styles.slider_container}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className={styles.slide_item}>
            <img src={src} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PauseOnHover;
