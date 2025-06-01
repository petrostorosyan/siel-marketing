import ChangeBlogButtons from "@/components/shared/changeBlogButtons/changeBlogButtons";
import styles from "./article.module.scss";
import ArticleContent from "./articleContent/articleContent";
import HorizontalCarousel from "@/components/shared/horizontalCarousel/horizontalCarousel";
import VerticalCarousel from "@/components/shared/verticalCarousel/verticalCarousel";
import { config } from "@/config/env-config";

export async function generateMetadata() {
  const domain = config.domain;
  const imageSource = `${domain}/images/link-covers/logo.webp`;
  const title = "AI Chatbots & Marketing Automation: How to Engage Customers 24/7";
  const description = "AI-driven chatbots are revolutionizing customer interactions by offering quick responses, solving common issues, and even assisting with purchases. Unlike traditional customer support, chatbots provide: Instant Support...";

  return {
    metadataBase: new URL(domain),
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `${domain}/blog/ai-chatbots-marketing-automation`,
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
