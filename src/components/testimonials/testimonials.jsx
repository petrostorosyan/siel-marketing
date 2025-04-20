import TestimonialCraousel from "./testimonialCraousel/testimonialCraousel";
import styles from "./testimonials.module.scss";

const Testimonials = () => {
  return (
    <section className={styles.testimonialsContainer}>
      <div className={styles.testimonialsWrapper}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <TestimonialCraousel />
      </div>
    </section>
  );
};

export default Testimonials;
