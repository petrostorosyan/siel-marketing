import HorizontalCarousel from "@/components/shared/horizontalCarousel/horizontalCarousel";
import styles from "./article.module.scss";
import ArticleContent from "./articleContent/articleContent";
import VerticalCarousel from "@/components/shared/verticalCarousel/verticalCarousel";
import ChangeBlogButtons from "@/components/shared/changeBlogButtons/changeBlogButtons";

export default function Page() {
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
          prevPageName="Colors You Choose"
          prevPageLink="/blog/colors-you-choose"
          nextPageName="AI Chatbots & Marketing Automation"
          nextPageLink="/blog/ai-chatbots-marketing-automation"
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
