import styles from "./blog.module.scss";

export default function LikeButton() {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.pageTitle}>Siel Blog</h1>
      <p className={styles.description}>
        Welcome to the SIEL Blog – your trusted source for expert insights,
        actionable strategies, and the latest updates in digital marketing and
        AI innovation. Dive into articles that empower your brand, inspire
        creativity, and keep you ahead in the ever-evolving landscape of
        marketing and technology.
      </p>
      <div className={styles.colorsBlogContent}>
        <div className={styles.colorsBlogInfo}></div>
      </div>
    </div>
  );
}
