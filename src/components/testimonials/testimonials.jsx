import Image from "next/image";
import TestimonialCraousel from "./testimonialCraousel/testimonialCraousel";
import styles from "./testimonials.module.scss";

const Testimonials = () => {
  return (
    <section className={styles.testimonialsContainer}>
      <div className={styles.testimonialsWrapper}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <TestimonialCraousel />
      </div>
      <div className={styles.leftDecor}>
        <Image
          width={225}
          height={362}
          src={"/images/decors/testimonials-left-decor.svg"}
          alt="left-decor"
          className={styles.decor}
        />
      </div>

      <div className={styles.rightDecor}>
        <Image
          width={225}
          height={362}
          src={"/images/decors/testimonials-right-decor.svg"}
          alt="left-decor"
          className={styles.decor}
        />
      </div>
    </section>
  );
};

export default Testimonials;
