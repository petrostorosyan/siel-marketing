import Image from "next/image";
import styles from "./servicesBlock.module.scss";
import ServiceCard from "./serviceCard/serviceCard";

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

const ServicesBlock = () => {
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
            <div className={styles.imageBlock}>
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
            <div className={styles.cardBox}>
              <ServiceCard title={item.title} listItems={item.listitems} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesBlock;
