import ChangeBlogButtons from "@/components/shared/changeBlogButtons/changeBlogButtons";
import styles from "./article.module.scss";
import ArticleContent from "./articleContent/articleContent";
import HorizontalCarousel from "@/components/shared/horizontalCarousel/horizontalCarousel";
import VerticalCarousel from "@/components/shared/verticalCarousel/verticalCarousel";

export default async function Page({ params: { id } }) {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.headerBackground}></div>
      <div className={styles.contentBlock}>
        <div className={styles.contentBody}></div>
        <div className={styles.article}>
          <ArticleContent />
        </div>
        <div className={styles.bottomBackground}></div>
      </div>
      <div className={styles.changeBlogButtons}>
        <ChangeBlogButtons
          prevPageName="The Future of Digital Marketing"
          prevPageLink="/blog/future-digital-marketing"
          nextPageName="Content Marketing in the AI Era"
          nextPageLink="/blog/content-marketing-in-ai-era"
        />
      </div>

      <div className={styles.otherArticlesContainer}>
        <div className={styles.otherArticles}>
          <h4 className={styles.sectionTitle}>Other Articles</h4>
          <div className={styles.horizontal}>
            <HorizontalCarousel />
          </div>
          <div className={styles.vertical}>
            <VerticalCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
