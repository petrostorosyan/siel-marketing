import Link from "next/link";
import styles from "./blog.module.scss";
import HorizontalCarousel from "@/components/shared/horizontalCarousel/horizontalCarousel";
import VerticalCarousel from "@/components/shared/verticalCarousel/verticalCarousel";

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
          <Link href={"/blog/colors-you-choose"} className={styles.readingButton}>
            Continue Reading
          </Link>
        </div>
        <div className={styles.mobileBlogInfo}>
          <h4 className={styles.mobileInfoTitle}>
            Did you know the colors you choose can influence your audience’s
            emotions and decisions?
          </h4>
          <p className={styles.mobileInfoDescription}>
            In this blog, we’ll explore the psychology behind color choices in
            marketing design and how to use them strategically to inspire
            action.
          </p>
          <div className={styles.readMoreBox}>
            <p className={styles.uploadTime}>10h ago</p>
            <button className={styles.readMoreBtn}>Read More</button>
          </div>
        </div>
      </div>

      <div className={styles.otherArticlesContainer}>
        <div className={styles.otherArticles}>
          <h4 className={styles.sectionTitle}>Other Articles</h4>
          <div className={styles.horizontal}><HorizontalCarousel /></div>
          <div className={styles.vertical}><VerticalCarousel /></div>
        </div>
      </div>
    </div>
  );
}
