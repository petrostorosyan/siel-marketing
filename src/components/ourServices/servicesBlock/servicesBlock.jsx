"use client";

import Image from "next/image";
import styles from "./servicesBlock.module.scss";
import ServiceCard from "./serviceCard/serviceCard";
import useScreenSize from "@/functions/hooks/useScreenSize";
import { useEffect, useState } from "react";

const servicesData = [
  {
    id: 1,
    title: "Graphic Design",
    direction: "left",
    imageSource: "/images/our-services/graphic-design.webp",
    listitems: [
      "Visual Design",
      "UI/UX Website Development",
      "⁠Brand Identity",
      "⁠Custom Logo Design",
      "Print-Ready Files",
      "⁠Professional Presentations",
      "⁠Social Media Assets",
    ],
  },
  {
    id: 2,
    title: "Video Solutions",
    imageSource: "/images/our-services/video-solutions.webp",
    direction: "right",
    listitems: [
      "Video Production and Editing ",
      "Enhanced Visual Effects",
      "⁠Logo Motion Graphics",
      "Intro and Outro Animations",
    ],
  },
  {
    id: 3,
    title: "Digital & AI Marketing",
    imageSource: "/images/our-services/digital-marketing.webp",
    direction: "left",
    listitems: [
      "⁠⁠Social Media Marketing (SMM) ",
      "Social Media Advertising",
      "Social Media Strategies and Business Plans",
      "⁠Troubleshooting and Problem Solving",
      "Audience Research and Location Insights ",
      "Consulting Services",
      "Email Marketing",
      "AI-Driven Audience Targeting",
      "AI-Powered Ad Optimization",
      "Chatbot Integration",
    ],
  },
];

const defaultImagePositions = [
  { id: 1, top: 100, right: 35 },
  { id: 2, top: 70, right: 30 },
  { id: 3, top: 170, right: 20 }
];

const mobileImagePositions = [
  { id: 1, top: 165, right: 0 },
  { id: 2, top: 120, right: -10 },
  { id: 3, top: 230, right: -8 }
];

const ServicesBlock = () => {
  const { width: screenSize, height } = useScreenSize();
  const [imagePositions, setImagePositions] = useState(defaultImagePositions);

  useEffect(() => {
    if (screenSize < 550) {
      setImagePositions(mobileImagePositions);
    } else {
      setImagePositions(defaultImagePositions);
    }
  }, [screenSize]);

  return (
    <div className={styles.servicesBlockWrapper}>
      {servicesData.map((item) => {
        return (
          <div
            key={item.id}
            className={`${styles.serviceContent} ${
              item.direction == "left" ? styles.left : styles.right
            }`}
          >
            <div
              className={`${styles.imageBlock} ${
                item.id == 2 ? styles.secondImageBlock : ""
              }`}
            >
              <div className={styles.imageBox}>
                <Image
                  width={450}
                  height={380}
                  src={item.imageSource}
                  alt={item.title}
                  className={styles.image}
                />
              </div>
            </div>
            <div
              className={`${styles.cardBox} ${
                item.id == 2 ? styles.secondCardbox : ""
              }`}
            >
              <ServiceCard
                title={item.title}
                listItems={item.listitems}
                id={item.id}
                imageSource={item.imageSource}
                imageAlt={item.title}
                imagePositions={imagePositions}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesBlock;
