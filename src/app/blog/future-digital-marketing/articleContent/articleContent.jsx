import Image from "next/image";
import styles from "./articleContent.module.scss";
import PrimaryButton from "@/components/shared/logo/primaryButton/primaryButton";

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
  },
];

const centerImages = [
  {
    id: 1,
    imageSource: "/images/blog/future-blog/future-blog-pic-1.webp",
    alt: "future-blog-pic-1",
  },
  {
    id: 2,
    imageSource: "/images/blog/future-blog/future-blog-pic-2.webp",
    alt: "future-blog-pic-2",
  },
  {
    id: 3,
    imageSource: "/images/blog/future-blog/future-blog-pic-3.webp",
    alt: "future-blog-pic-3",
  },
];

const stayAhead = [
  {
    id: 1,
    text: "Optimize your social media profiles for seamless shopping experiences.",
  },
  {
    id: 2,
    text: "Use influencer collaborations to boost credibility and reach.",
  },
  {
    id: 3,
    text: "Integrate AI-driven recommendations to personalize the shopping journey.",
  },
];

const personalizeEffectively = [
  {
    id: 1,
    text: "Use AI-powered tools to segment audiences based on behavior and preferences.",
  },
  {
    id: 2,
    text: "Send personalized email campaigns with dynamic content.",
  },
  {
    id: 3,
    text: "Implement real-time website personalization for tailored experiences.",
  },
];

const trend = [
  {
    id: 1,
    text: "Use AI-Highlight sustainable practices in your branding and messaging.",
  },
  {
    id: 2,
    text: "Partner with eco-friendly initiatives to build credibility.",
  },
  {
    id: 3,
    text: "Be transparent about your company’s impact and commitments.",
  },
];

const bottomImages = [
  {
    id: 1,
    imageSource: "/images/blog/future-blog/future-blog-pic-4.webp",
    alt: "future-blog-pic-4",
  },
  {
    id: 2,
    imageSource: "/images/blog/future-blog/future-blog-pic-5.webp",
    alt: "future-blog-pic-5",
  },
  {
    id: 3,
    imageSource: "/images/blog/future-blog/future-blog-pic-6.webp",
    alt: "future-blog-pic-6",
  },
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
      <div className={styles.imagesBlock}>
        {centerImages.map((picture) => {
          return (
            <div key={picture.id} className={styles.imageBox}>
              <Image
                width={345}
                height={245}
                src={picture.imageSource}
                alt={picture.alt}
                className={styles.image}
              />
            </div>
          );
        })}
      </div>
      <h6 className={styles.subTitle}>
        Social Commerce is Reshaping Online Shopping
      </h6>
      <p className={styles.description}>
        Social media is no longer just for engagement; it’s a fully integrated
        sales platform. Facebook Shops, Instagram Checkout, and TikTok Shopping
        make it easier than ever for consumers to discover and purchase products
        directly within apps.
      </p>
      <h6 className={styles.subTitle}>To stay ahead:</h6>
      <ul className={styles.list}>
        {stayAhead.map((item) => {
          return (
            <li key={item.id} className={styles.listItem}>
              {item.text}
            </li>
          );
        })}
      </ul>
      <h6 className={styles.subTitle}>Hyper-Personalization is a Must</h6>
      <p className={styles.description}>
        Generic marketing messages are a thing of the past. Consumers expect
        brands to understand their needs and deliver highly personalized
        experiences across multiple touchpoints.
      </p>
      <h6 className={styles.subTitle}>How to personalize effectively:</h6>
      <ul className={styles.list}>
        {personalizeEffectively.map((item) => {
          return (
            <li key={item.id} className={styles.listItem}>
              {item.text}
            </li>
          );
        })}
      </ul>
      <h6 className={styles.subTitle}>
        Ethical and Sustainable Marketing Matters
      </h6>
      <p className={styles.description}>
        Consumers are becoming more conscious of the brands they support.
        Sustainability, ethical sourcing, and corporate social responsibility
        are influencing purchasing decisions more than ever.
      </p>
      <h6 className={styles.subTitle}>Steps to embrace this trend:</h6>
      <ul className={styles.list}>
        {trend.map((item) => {
          return (
            <li key={item.id} className={styles.listItem}>
              {item.text}
            </li>
          );
        })}
      </ul>
      <div className={styles.imagesBlock}>
        {bottomImages.map((picture) => {
          return (
            <div key={picture.id} className={styles.imageBox}>
              <Image
                width={345}
                height={245}
                src={picture.imageSource}
                alt={picture.alt}
                className={styles.image}
              />
            </div>
          );
        })}
      </div>
      <h6 className={styles.subTitle}>Final Thoughts</h6>
      <p className={styles.description}>
        The digital marketing world in 2025 will be driven by AI, personalized
        experiences, and evolving consumer behaviors. Businesses that embrace
        these changes will not only stay relevant but also thrive in an
        increasingly competitive space. Whether it’s optimizing for voice
        search, leveraging AI-driven tools, or tapping into social commerce,
        staying ahead requires a proactive approach.
      </p>
      <p className={styles.bottomDescription}>
        At SIEL Marketing, we help businesses navigate these shifts with
        cutting-edge strategies tailored to their needs. Need help preparing for
        the future of digital marketing? Let’s connect and create a game plan
        for success!
      </p>

      <div className={styles.buttonBox}>
        <PrimaryButton
          title="Contact Us Today!"
          color="black"
          link="https://api.whatsapp.com/send/?phone=37495666833&text=Hello%2C+I%E2%80%99m+interested+in+learning+more+about+your+services+at+SIEL+Marketing.+Could+you+please+provide+details+on+how+your+packages+can+help+my+business+grow%3F+Thank+you%21&type=phone_number&app_absent=0"
        />
      </div>
    </div>
  );
};

export default ArticleContent;
