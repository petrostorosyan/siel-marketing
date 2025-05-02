import Link from "next/link";
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
        <div className={styles.colorsBlogInfo}>
          <p className={styles.infoTitle}>COLORS YOU CHOOSE</p>
          <p className={styles.infoDescription}>
            Did you know the colors you choose can influence your audience’s
            emotions and decisions? In this blog, we’ll explore the psychology
            behind color choices in marketing design and how to use them
            strategically to inspire action.
          </p>
          <Link href={"/"} className={styles.readingButton}>Continue Reading</Link>
        </div>
      </div>
    </div>
  );
}
