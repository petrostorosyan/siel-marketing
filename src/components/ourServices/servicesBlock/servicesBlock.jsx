import Image from "next/image";
import styles from "./servicesBlock.module.scss";
import ServiceCard from "./serviceCard/serviceCard";

const ServicesBlock = () => {
  return (
    <div className={styles.servicesBlockWrapper}>
      <div className={styles.serviceContent}>
        <div className={styles.imageBox}>
          <Image
            width={650}
            height={420}
            src={"/images/our-services/graphic-design.webp"}
            alt="graphic-design"
            className={styles.graphicImage}
          ></Image>
        </div>

        <ServiceCard />
      </div>
    </div>
  );
};

export default ServicesBlock;
