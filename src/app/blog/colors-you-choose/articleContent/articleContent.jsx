import Image from "next/image";
import styles from "./articleContent.module.scss";
import { Key } from "@mui/icons-material";
import PrimaryButton from "@/components/shared/logo/primaryButton/primaryButton";

const colorsSparks = [
  {
    id: 1,
    boldWord: "Red",
    text: "sparks urgency, passion, and excitement, making it a go-to color for clearance sales and food brands.",
  },
  {
    id: 2,
    boldWord: "Blue",
    text: "sparks urgency, passion, and excitement, making it a go-to color for clearance sales and food brands.",
  },
  {
    id: 3,
    boldWord: "Yellow",
    text: "sparks urgency, passion, and excitement, making it a go-to color for clearance sales and food brands.",
  },
  {
    id: 4,
    boldWord: "Green",
    text: "symbolizes health, growth, and sustainability, often used by eco-friendly or wellness brands.",
  },
  {
    id: 5,
    boldWord: "Black",
    text: "exudes luxury, sophistication, and exclusivity, a favorite for high-end fashion and premium services",
  },
];

const rightColorsChoose = [
  {
    id: 1,
    title: "1. Understand Your Brand Personality",
    text: "Are you aiming for a bold and energetic look or something calm and trustworthy? Your brand’s personality should align with the emotions you want to evoke.",
  },
  {
    id: 2,
    title: "2. Consider Your Target Audience",
    text: "Different demographics respond differently to colors. For instance, younger audiences are drawn to vibrant colors, while professional services benefit from muted, sophisticated palettes.",
  },
  {
    id: 3,
    title: "3. Use the Right Color Combinations",
    text: "A well-balanced color scheme creates harmony and improves readability. Try using a dominant brand color, a complementary secondary color, and a neutral background to maintain visual balance.",
  },
];

const centerImages = [
  {
    id: 1,
    source: "/images/blog/colors-blog/center-blog-pic-1.webp",
  },
  {
    id: 2,
    source: "/images/blog/colors-blog/center-blog-pic-2.webp",
  },
  {
    id: 3,
    source: "/images/blog/colors-blog/center-blog-pic-3.webp",
  },
];

const driveConversions = [
  {
    id: 1,
    boldWord: "Call-to-Action (CTA) Buttons:",
    text: "Studies show that contrasting colors like red, orange, or green make CTAs more noticeable and increase click-through rates.",
  },
  {
    id: 2,
    boldWord: "Website Backgrounds:",
    text: "Dark backgrounds feel premium but may reduce readability, while light backgrounds improve readability and user engagement.",
  },
  {
    id: 3,
    boldWord: "Product Packaging:",
    text: "Color influences purchase decisions - 85% of shoppers say color is a primary reason for buying a product.",
  },
];

const brandsExamples = [
  {
    id: 1,
    boldWord: "Coca-Cola (Red):",
    text: "Creates a sense of urgency and excitement, making it a perfect fit for an energetic, global brand.",
  },
  {
    id: 2,
    boldWord: "Facebook (Blue):",
    text: "Enhances trust and reliability, making users feel comfortable spending time on the platform.",
  },
  {
    id: 3,
    boldWord: "McDonald’s (Red & Yellow):",
    text: "Red stimulates appetite, and yellow conveys happiness, an ideal combination for fast food.",
  },
  {
    id: 4,
    boldWord: "Starbucks (Green):",
    text: "Reflects health, sustainability, and a calming experience.",
  },
];

const ArticleContent = () => {
  return (
    <div className={styles.articleContainer}>
      <p className={styles.uploadDate}>Siel Marketing / May 14 2025</p>
      <h1 className={styles.pageTitle}>
        COLORS YOU CHOOSE: HOW COLOR PSYCHOLOGY SHAPES MARKETING SUCCESS
      </h1>
      <div className={styles.line}></div>
      <p className={styles.description}>
        Imagine walking into a store where everything is gray and lifeless. No
        vibrant displays, no inviting colors, just a dull, uninspiring space.
        Would you feel excited to shop? Probably not. The same principle applies
        to digital marketing and branding. The colors you choose can make or
        break your brand’s impact, influencing emotions, decisions, and even
        conversions.
      </p>
      <h6 className={styles.subTitle}>
        The Science Behind Color Psychology in Marketing
      </h6>
      <p className={styles.description}>
        Color psychology is the study of how different colors affect human
        behavior. Research shows that up to 90% of first impressions are based
        on color alone. That means the shades you use in your logo, website, and
        marketing materials are more than just aesthetic choices, they send
        subconscious messages that shape how your audience perceives your brand.
      </p>
      <span className={styles.lightWeightTitle}>For example:</span>
      <div className={styles.textAndImage}>
        <div className={styles.textBox}>
          {colorsSparks.map((item) => {
            return (
              <p key={item.id} className={styles.text}>
                <b className={styles.boldText}>{item.boldWord}</b>
                {item.text}
              </p>
            );
          })}
        </div>
        <div className={styles.imageBox}>
          <Image
            width={600}
            height={280}
            src={"/images/blog/colors-blog/colors-sparks.webp"}
            alt="colors-sparks"
            className={styles.image}
          />
        </div>
      </div>
      <h6 className={styles.subTitle}>
        How to Choose the Right Colors for Your Brand
      </h6>
      <p className={styles.description}>
        Selecting the right color palette isn’t just about picking your favorite
        shades, it’s about aligning colors with your brand identity, industry,
        and audience expectations. Here’s how to make strategic color choices:
      </p>

      {rightColorsChoose.map((el) => {
        return (
          <div key={el.id}>
            <h6 className={styles.subTitle}>{el.title}</h6>
            <p className={styles.description}>{el.text}</p>
          </div>
        );
      })}

      <div className={styles.centerImageBlock}>
        {centerImages.map((picture) => {
          return (
            <div key={picture.id} className={styles.imageBox}>
              <Image
                width={345}
                height={245}
                src={picture.source}
                alt="center-pic"
                className={styles.image}
              />
            </div>
          );
        })}
      </div>

      <h6 className={styles.subTitle}>Using Colors to Drive Conversions</h6>
      <p className={styles.description}>
        Beyond branding, colors play a key role in user experience and
        conversions. Here’s how to use them strategically:
      </p>
      <div className={styles.textBox}>
        {driveConversions.map((elem) => {
          return (
            <p key={elem.id} className={styles.text}>
              <b className={styles.boldText}>{elem.boldWord}</b>
              {elem.text}
            </p>
          );
        })}
      </div>

      <h6 className={`${styles.blockTitle} ${styles.titlePositionTop}`}>
        Examples of Brands Using Color Psychology Effectively
      </h6>

      <div className={styles.textBox}>
        {brandsExamples.map((item) => {
          return (
            <p key={item.id} className={styles.text}>
              <b className={styles.boldText}>{item.boldWord}</b>
              {item.text}
            </p>
          );
        })}
      </div>

      <h6 className={`${styles.blockTitle} ${styles.titlePositionTop} ${styles.titlePositionBottom}`}>
        Final Thoughts: Make Colors Work for You
      </h6>

      <p className={styles.description}>
        Choosing the right colors isn’t just about aesthetics, it’s about
        shaping perception, influencing behavior, and driving action. At SIEL
        Marketing, we specialize in designing brand identities that resonate
        with your audience. Whether you need a fresh logo, a color-coordinated
        website, or a full-scale marketing strategy, our expert team is here to
        bring your vision to life.
      </p>

      <p className={`${styles.description} ${styles.descPositionTop}`}>
        Need help finding the perfect color palette for your brand? Let’s create
        something unforgettable together.
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
