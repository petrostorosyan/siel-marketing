import Image from "next/image";
import styles from "./articleContent.module.scss";

const forBusinessData = [
  {
    id: 1,
    text: "AI-powered chatbots will enhance customer interactions with 24/7 support.",
  },
  {
    id: 2,
    text: "Machine learning algorithms will refine ad targeting for better ROI.",
  },
  {
    id: 3,
    text: "Predictive analytics will help brands anticipate customer needs before they even arise.",
  },
];

const adaptData = [
  {
    id: 1,
    text: "Optimize content for conversational, long-tail keywords to align with voice search.",
  },
  {
    id: 2,
    text: "Invest in high-quality images with descriptive alt text to improve visual search rankings.",
  },
  {
    id: 3,
    text: "Ensure website content is structured in a way that answers questions directly.",
  },
];

const strategiesData = [
  {
    id: 1,
    text: "Create bite-sized, engaging videos tailored to your target audience.",
  },
  {
    id: 2,
    text: "Use captions and text overlays to make content accessible and scroll-stopping.",
  },
  {
    id: 3,
    text: "Use storytelling to build emotional connections with viewers.",
  },
];

const bestPractices = [
  {
    id: 1,
    text: "Encourage email sign-ups through valuable incentives like exclusive content or discounts.",
  },
  {
    id: 2,
    text: "Use AI-driven insights to analyze customer data while respecting privacy laws.",
  },
  {
    id: 3,
    text: "Build trust through transparency about data usage and personalization.",
  }
];

const ArticleContent = () => {
  return (
    <div className={styles.articleContainer}>
      <p className={styles.uploadDate}>Siel Marketing / May 14 2025</p>
      <h1 className={styles.pageTitle}>
        The Future of Digital Marketing: What’s Changing in 2025?
      </h1>
      <div className={styles.line}></div>
      <p className={styles.description}>
        The digital marketing landscape is evolving faster than ever, and if
        you’re not keeping up, you’re falling behind. As we step into 2025,
        businesses need to adapt to the latest trends, AI-driven strategies, and
        shifting consumer behaviors to stay competitive. This blog explores the
        biggest changes shaping the future of digital marketing and how you can
        use them for success.
      </p>
      <h6 className={styles.subTitle}>AI-Powered Marketing is Taking Over</h6>
      <p className={styles.description}>
        Artificial intelligence is no longer just a buzzword, it’s reshaping the
        way businesses approach marketing. AI-driven ad optimization, audience
        targeting, and predictive analytics are making campaigns more efficient
        and effective. Marketers can now use AI to analyze consumer behavior in
        real-time, personalize content, and automate repetitive tasks, allowing
        for smarter decision-making and higher engagement.
      </p>
      <span className={styles.subTitle}>What this means for businesses:</span>
      <div className={styles.textAndImage}>
        <ul className={styles.listBox}>
          {forBusinessData.map((item) => {
            return (
              <li key={item.id} className={styles.listItem}>
                {item.text}
              </li>
            );
          })}
        </ul>
        <div className={styles.imageBox}>
          <Image
            width={600}
            height={280}
            src={"/images/blog/future-blog/for-business.webp"}
            alt="colors-sparks"
            className={styles.image}
          />
        </div>
      </div>
      <h6 className={styles.subTitle}>The Rise of Voice and Visual Search</h6>
      <p className={styles.description}>
        Consumers are searching differently. With the increasing use of smart
        assistants like Alexa, Siri, and Google Assistant, voice search is
        expected to dominate. Meanwhile, visual search is gaining traction, with
        platforms like Google Lens and Pinterest enabling users to search using
        images instead of text.
      </p>
      <h6 className={styles.subTitle}>How to adapt:</h6>
      <ul className={styles.list}>
        {adaptData.map((item) => {
          return (
            <li key={item.id} className={styles.listItem}>
              {item.text}
            </li>
          );
        })}
      </ul>
      <h6 className={styles.subTitle}>Short-Form Video Content is King</h6>
      <p className={styles.description}>
        Video marketing isn’t new, but the way audiences consume it is changing.
        Platforms like TikTok, Instagram Reels, and YouTube Shorts are
        dominating digital spaces, making short-form video a powerful tool for
        engagement.
      </p>
      <h6 className={styles.subTitle}>Key strategies for 2025:</h6>
      <ul className={styles.list}>
        {strategiesData.map((item) => {
          return (
            <li key={item.id} className={styles.listItem}>
              {item.text}
            </li>
          );
        })}
      </ul>
      <h6 className={styles.subTitle}>
        First-Party Data Will Define Marketing Success
      </h6>
      <p className={styles.description}>
        With privacy regulations tightening and third-party cookies
        disappearing, brands must focus on collecting and utilizing first-party
        data. Businesses that invest in ethical data collection methods will
        gain a competitive advantage.
      </p>
      <h6 className={styles.subTitle}>Best practices:</h6>
      <ul className={styles.list}>
        {bestPractices.map((item) => {
          return (
            <li key={item.id} className={styles.listItem}>
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleContent;
