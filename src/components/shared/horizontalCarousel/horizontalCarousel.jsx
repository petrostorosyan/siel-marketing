"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./horizontalCarousel.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { blogsData } from "@/services/blogs/blogsData";
import useScreenSize from "@/functions/hooks/useScreenSize";
import Link from "next/link";

const HorizontalCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isNavReady, setIsNavReady] = useState(false);
  const [sliedesCount, setSliedesCount] = useState();
  const { width: screenSize, height } = useScreenSize();

  useEffect(() => {
    setIsNavReady(true);
  }, []);

  useEffect(() => {
    if (screenSize<1300) {
      setSliedesCount(2);
    } else {
      setSliedesCount(3);
    }
  }, [screenSize]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselRow}>
        <button ref={prevRef} className={`${styles.navButton} ${styles.prev}`}>
          <img
            width={70}
            height={70}
            src="/images/icons/right-arrow.svg"
            alt="left-arrow"
            className={styles.image}
          />
        </button>

        {isNavReady && (
          <Swiper
            modules={[Navigation]}
            slidesPerView={sliedesCount}
            loop={true}
            spaceBetween={50}
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
                  <Link href={item.link} className={styles.slideContent}>
                    <div className={styles.imageBox}>
                      <Image
                        width={360}
                        height={250}
                        src={item.imageSource}
                        alt={item.title}
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.descriptionBox}>
                      <p className={styles.date}>{item.uploadDate}</p>
                      <p className={styles.descTitle}>{item.title}</p>
                      <p className={styles.description}>{item.description}</p>
                    </div>
                  </Link>                  
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        <button ref={nextRef} className={`${styles.navButton} ${styles.next}`}>
          <Image
            width={70}
            height={70}
            src="/images/icons/right-arrow.svg"
            alt="right-arrow"
            className={styles.image}
          />
        </button>
      </div>
    </div>
  );
};

export default HorizontalCarousel;
