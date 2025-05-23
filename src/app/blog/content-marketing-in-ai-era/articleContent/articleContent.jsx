import Image from "next/image";
import styles from "./articleContent.module.scss";
import PrimaryButton from "@/components/shared/logo/primaryButton/primaryButton";

const riseOfAiInMarketing = [
  {
    id: 1,
    text: "Automate content creation",
  },
  {
    id: 2,
    text: "Personalize marketing messages",
  },
  {
    id: 3,
    text: "Improve SEO with real-time insights",
  },
  {
    id: 4,
    text: "Generate bulk content at scale",
  },
  {
    id: 5,
    text: "Create AI-generated images to enhance visual storytelling",
  },
  {
    id: 6,
    text: "Develop AI-driven influencers and avatars for branding and engagement",
  },
  {
    id: 7,
    text: "Utilize AI voiceovers for video content and marketing campaigns",
  },
];

const powerHumanContent = [
  {
    id: 1,
    text: "Emotional Appeal: AI lacks true emotions, making it difficult to craft compelling narratives.",
  },
  {
    id: 2,
    text: "Creativity & Nuance: Human writers bring unique perspectives, wit, and cultural understanding.",
  },
  {
    id: 3,
    text: "Brand Identity: A brand’s voice is more than just words - it’s personality, tone, and values that AI can’t fully replicate.",
  },
  {
    id: 4,
    text: "Visual Authenticity: AI-generated images may lack the imperfections and warmth of human-created visuals.",
  },
  {
    id: 5,
    text: "Trust & Engagement: AI influencers and avatars can enhance brand interaction, but consumers still prefer relatable, human-driven content.",
  },
];

const rightBalance = [
  {
    id: 1,
    text: "AI for Data & Optimization: Use AI for keyword research, content suggestions, and performance tracking.",
  },
  {
    id: 2,
    text: "Human Writers for Authenticity: Craft compelling stories, refine tone, and ensure emotional engagement.",
  },
  {
    id: 3,
    text: "AI-Assisted Editing: Tools like Jasper AI and Copy.ai enhance readability and structure while keeping content authentic.",
  },
  {
    id: 4,
    text: "AI-Generated Images & Avatars: Enhance branding with AI-generated visuals while ensuring human oversight to maintain authenticity.",
  },
  {
    id: 5,
    text: "AI Voiceovers: Use AI-driven voice technology for narration and advertisements while blending in real human voices for connection.",
  },
];

const centerImages = [
  {
    id: 1,
    imageSource: "/images/blog/content-marketing/content-marketing-pic-1.webp",
    alt: "content-marketing-pic-1",
  },
  {
    id: 2,
    imageSource: "/images/blog/content-marketing/content-marketing-pic-2.webp",
    alt: "content-marketing-pic-2",
  },
  {
    id: 3,
    imageSource: "/images/blog/content-marketing/content-marketing-pic-3.webp",
    alt: "content-marketing-pic-3",
  },
];

const ArticleContent = () => {
  return (
    <div className={styles.articleContainer}>
      <p className={styles.uploadDate}>Siel Marketing / May 14 2025</p>
      <h1 className={styles.pageTitle}>
        Content Marketing in the AI Era: Is Human-Created Content Still
        Relevant?
      </h1>
      <div className={styles.line}></div>
      <p className={styles.description}>
        AI-generated content is everywhere, from social media captions to
        full-length blog posts. But does this mean human storytelling is
        becoming obsolete? Far from it. In an age where AI is reshaping content
        creation, the balance between machine efficiency and human authenticity
        is more important than ever.
      </p>
      <h6 className={styles.subTitle}>The Rise of AI in Content Marketing</h6>
      <p className={styles.description}>
        AI-powered tools can generate articles, write product descriptions, and
        even optimize content for search engines. Businesses are using AI to:
      </p>
      <div className={styles.textAndImage}>
        <ul className={styles.listBox}>
          {riseOfAiInMarketing.map((item) => {
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
            src={
              "/images/blog/content-marketing/rise-of-ai-content-marketing.webp"
            }
            alt="colors-sparks"
            className={styles.image}
          />
        </div>
      </div>
      <p className={styles.description}>
        While these advantages make AI an attractive option, relying solely on
        machine-generated content comes with limitations.
      </p>
      <h6 className={styles.subTitle}>The Power of Human-Created Content</h6>
      <p className={styles.description}>
        Authenticity and emotional connection set human-created content apart.
        Audiences crave genuine stories, personal experiences, and brand voices
        that resonate. Here’s why human content still matters:
      </p>
      <ul className={`${styles.list} ${styles.listPosition}`}>
        {powerHumanContent.map((item) => {
          return (
            <li
              key={item.id}
              className={styles.listItem}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
      <h6 className={styles.subTitle}>
        Striking the Right Balance: AI + Human Creativity
      </h6>
      <p className={styles.description}>
        Rather than replacing human writers, AI should be seen as a powerful
        assistant. Successful content strategies blend AI efficiency with human
        creativity:
      </p>
      <ul className={`${styles.list} ${styles.listPosition}`}>
        {rightBalance.map((item) => {
          return (
            <li
              key={item.id}
              className={styles.listItem}
            >
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
      <h6 className={styles.subTitle}>The Future of Content Marketing</h6>
      <p className={styles.description}>
        The future isn’t about choosing AI over humans or vice versa - it’s
        about using both to create impactful content. Brands that master this
        synergy will produce engaging, high-performing content that speaks to
        both search engines and real people.
      </p>
      <p className={styles.bottomDescription}>
        Expect to see AI-generated influencers becoming more prevalent,
        AI-driven avatars representing brands in digital spaces, and AI-enhanced
        visuals dominating social media. However, consumers will still demand
        authentic, human-driven experiences that AI alone cannot replicate.
      </p>
      <h6 className={styles.subTitle}>Final Thoughts</h6>
      <p className={styles.bottomDescription}>
        AI is transforming content marketing, but human creativity remains
        irreplaceable. At SIEL Marketing, we believe in blending AI-powered
        insights with authentic storytelling to deliver compelling content that
        connects. Need expert-crafted content that strikes the perfect balance?
        Let’s talk!
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
