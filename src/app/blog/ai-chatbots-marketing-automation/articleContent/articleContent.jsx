import Image from "next/image";
import styles from "./articleContent.module.scss";
import PrimaryButton from "@/components/shared/logo/primaryButton/primaryButton";

const riseOfChatbots = [
  {
    id: 1,
    text: "Instant Support: No waiting times, just immediate answers to customer queries.",
  },
  {
    id: 2,
    text: "Personalized Experiences: AI analyzes user behavior and tailors responses accordingly.",
  },
  {
    id: 3,
    text: "Seamless Integration: Works across multiple platforms, from websites to social media and messaging apps.",
  },
];

const businessBenefit = [
  {
    id: 1,
    text: "Enhanced Customer Satisfaction: Faster response times improve user experience.",
  },
  {
    id: 2,
    text: "Cost Savings: Reduces the need for a large customer support team.",
  },
  {
    id: 3,
    text: "Lead Generation & Sales: Engages visitors, collects data, and guides them through the sales funnel.",
  },
];

const marketingAutomation = [
  {
    id: 1,
    text: "Automated Email Campaigns: Nurture leads with personalized messages at the right time.",
  },
  {
    id: 2,
    text: "AI-Driven Audience Targeting: Analyze user behavior to create hyper-targeted campaigns.",
  },
  {
    id: 3,
    text: "Chatbot-Assisted Sales Funnels: Guide potential customers from inquiry to purchase without human intervention.",
  },
  {
    id: 4,
    text: "Social Media Automation: Schedule and optimize posts for maximum engagement.",
  },
];

const centerImages = [
  {
    id: 1,
    imageSource: "/images/blog/ai-chatbots-marketing/ai-chatbots-pic-1.webp",
    alt: "ai-chatbots-pic-1",
  },
  {
    id: 2,
    imageSource: "/images/blog/ai-chatbots-marketing/ai-chatbots-pic-2.webp",
    alt: "ai-chatbots-pic-2",
  },
  {
    id: 3,
    imageSource: "/images/blog/ai-chatbots-marketing/ai-chatbots-pic-3.webp",
    alt: "ai-chatbots-pic-3",
  },
];

const combiningChatbots = [
  {
    id: 1,
    text: "24/7 Engagement: Always-on communication for better customer experiences.",
  },
  {
    id: 2,
    text: "Higher Conversion Rates: AI nurtures leads and encourages sales with data-driven strategies.",
  },
  {
    id: 3,
    text: "Efficient Operations: Reduce manual workload and improve efficiency.",
  },
];

const ArticleContent = () => {
  return (
    <div className={styles.articleContainer}>
      <p className={styles.uploadDate}>Siel Marketing / May 14 2025</p>
      <h1 className={styles.pageTitle}>
        AI Chatbots & Marketing Automation: How to Engage Customers 24/7
      </h1>
      <div className={styles.line}></div>
      <p className={styles.description}>
        Imagine never missing a potential customer inquiry, no matter the time
        of day. AI chatbots and marketing automation are making this a reality
        by providing instant, personalized interactions that keep customers
        engaged 24/7. In today’s fast-paced digital world, businesses need smart
        solutions to streamline communication, enhance customer service, and
        drive conversions.
      </p>
      <h6 className={styles.subTitle}>
        The Rise of AI Chatbots in Customer Engagement
      </h6>
      <p className={styles.description}>
        AI-driven chatbots are revolutionizing customer interactions by offering
        quick responses, solving common issues, and even assisting with
        purchases. Unlike traditional customer support, chatbots provide:
      </p>

      <div className={styles.textAndImage}>
        <ul className={styles.listBox}>
          {riseOfChatbots.map((item) => {
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
            src={"/images/blog/ai-chatbots-marketing/rise-of-chatbots.webp"}
            alt="colors-sparks"
            className={styles.image}
          />
        </div>
      </div>
      <h6 className={styles.subTitle}>
        How Businesses Benefit from AI Chatbots:
      </h6>
      <ul className={styles.list}>
        {businessBenefit.map((item) => {
          return (
            <li key={item.id} className={styles.listItem}>
              {item.text}
            </li>
          );
        })}
      </ul>
      <h6 className={styles.subTitle}>
        Marketing Automation: The Secret to Effortless Growth
      </h6>
      <p className={styles.description}>
        Beyond chatbots, AI-powered marketing automation is transforming how
        businesses interact with customers. By automating repetitive tasks,
        companies can focus on strategy and growth while ensuring a seamless
        customer experience.
      </p>
      <h6 className={styles.subTitle}>Key Benefits of Marketing Automation:</h6>
      <ul className={styles.list}>
        {marketingAutomation.map((item) => {
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
        Combining Chatbots & Automation for Maximum Impact
      </h6>
      <h6 className={styles.lightWeightTitle}>
        When AI chatbots and marketing automation work together, businesses
        achieve:
      </h6>
      <ul className={styles.list}>
        {combiningChatbots.map((item) => {
          return (
            <li key={item.id} className={styles.listItem}>
              {item.text}
            </li>
          );
        })}
      </ul>
      <h6 className={styles.subTitle}>
        The Future of AI in Customer Engagement
      </h6>
      <p className={styles.description}>
        As AI technology evolves, chatbots and automation will become even more
        intelligent, capable of understanding emotions, providing more
        human-like interactions, and offering advanced predictive analytics.
        Businesses that embrace these innovations will stay ahead in a
        competitive digital landscape.
      </p>
      <h6 className={styles.subTitle}>Final Thoughts</h6>
      <p className={styles.description}>
        AI chatbots and marketing automation are no longer optional, they’re
        essential tools for businesses looking to enhance customer engagement,
        improve efficiency, and drive sales. At SIEL Marketing, we specialize in
        AI-powered solutions to help brands connect with customers seamlessly.
        Ready to elevate your digital strategy? Let’s make automation work for
        you!
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
