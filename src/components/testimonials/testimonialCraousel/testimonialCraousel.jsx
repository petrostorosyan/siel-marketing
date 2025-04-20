"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./testimonialCraousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Rating } from "@mui/material";
import { testimonialsData } from "@/services/testimonials/testimonialsData";

const TestimonialCraousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isNavReady, setIsNavReady] = useState(false);

  useEffect(() => {
    setIsNavReady(true);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselRow}>
        <button ref={prevRef} className={`${styles.navButton} ${styles.prev}`}>
          <img
            width={70}
            height={70}
            src="/images/icons/carousel-arrow.svg"
            alt="left-arrow"
            className={styles.image}
          />
        </button>

        {isNavReady && (
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={80}
            className={styles.carouselWrapper}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // backup init в случае чего
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {testimonialsData.map((item) => {
              return (
                <SwiperSlide key={item.id} className={styles.slide}>
                  <div className={styles.topDecor}>
                    <Image
                      width={540}
                      height={270}
                      src={"/images/decors/bottom-decor.svg"}
                      alt="decor"
                      className={styles.decor}
                    />
                  </div>
                  <div className={styles.clientInfoBlock}>
                    <div className={styles.imageBox}>
                      <Image
                        width={80}
                        height={80}
                        src={item.imageSource}
                        alt={item.name}
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.clientInfo}>
                      <p className={styles.clientName}>{item.name}</p>
                      <Rating
                        name="half-rating-read"
                        defaultValue={item.rate}
                        precision={item.rate}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={styles.descriptionBox}>
                    <p className={styles.descTitle}>{item.descriptionTitle}</p>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                  <div className={styles.bottomDecor}>
                    <Image
                      width={540}
                      height={270}
                      src={"/images/decors/bottom-decor.svg"}
                      alt="decor"
                      className={styles.decor}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        <button ref={nextRef} className={`${styles.navButton} ${styles.next}`}>
          <Image
            width={70}
            height={70}
            src="/images/icons/carousel-arrow.svg"
            alt="right-arrow"
            className={styles.image}
          />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCraousel;
