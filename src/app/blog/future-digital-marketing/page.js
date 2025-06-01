import HorizontalCarousel from "@/components/shared/horizontalCarousel/horizontalCarousel";
import styles from "./article.module.scss";
import ArticleContent from "./articleContent/articleContent";
import VerticalCarousel from "@/components/shared/verticalCarousel/verticalCarousel";
import ChangeBlogButtons from "@/components/shared/changeBlogButtons/changeBlogButtons";
import { config } from "@/config/env-config";

export async function generateMetadata() {
  const domain = config.domain;
  const imageSource = `${domain}/images/link-covers/logo.webp`;
  const title = "The Future of Digital Marketing: What’s Changing in 2025?";
  const description = "Artificial intelligence is no longer just a buzzword, it’s reshaping the way businesses approach marketing. AI-driven ad optimization, audience targeting, and predictive analytics are making campaigns more efficient and effective.";

  return {
    metadataBase: new URL(domain),
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `${domain}/blog/future-digital-marketing`,
      siteName: "Siel Marketing",
      images: [
        {
          url: imageSource,
          width: 1200,
          height: 630,
          type: "image/webp",
          alt: title,
        },
      ],
      locale: 'en_US'
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // site: '@SIELMarketing', 
      images: [
        {
          url: imageSource,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    }
  };
}


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
