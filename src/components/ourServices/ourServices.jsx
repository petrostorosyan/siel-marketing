import styles from "./ourServices.module.scss";
import ServicesBlock from "./servicesBlock/servicesBlock";

const OurServices = () => {
  return (
    <div className={styles.servicesWrapper}>
      <div className={styles.servicesContainer}>
        <div className={styles.titleBlock}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.description}>
            At SIEL Marketing, we craft compelling narratives for your brand.
            Whether it's stunning graphics, interactive web designs, or
            strategic marketing plans, we're here to elevate your business.
          </p>
        </div>
        <ServicesBlock />
      </div>
    </div>
  );
};

export default OurServices;
