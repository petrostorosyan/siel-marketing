"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./horizontalCarousel.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { blogsData } from "@/services/blogs/blogsData";

const HorizontalCarousel = () => {
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
            slidesPerView={3}
            loop={true}
            spaceBetween={80}
            className={styles.carouselWrapper}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {blogsData.map((item) => {
              return (
                <SwiperSlide key={item.id} className={styles.slide}>
                  <div className={styles.clientInfoBlock}>
                    <div className={styles.imageBox}>
                      <Image
                        width={80}
                        height={80}
                        src={item.imageSource}
                        alt={item.title}
                        className={styles.image}
                      />
                    </div>
                  </div>
                  <div className={styles.descriptionBox}>
                    <p className={styles.descTitle}>{item.descriptionTitle}</p>
                    <p className={styles.description}>{item.description}</p>
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
  )
}

export default HorizontalCarousel;