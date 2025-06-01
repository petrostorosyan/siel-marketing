
import { config } from "@/config/env-config";
import AccordionSection from "./accordionSection/accordionSection";
import styles from "./faq.module.scss";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: ["variable"] });

export async function generateMetadata() {
  const domain = config.domain;
  const imageSource = `${domain}/images/link-covers/logo.webp`;
  const title = "SIEL Marketing FAQ | Common Questions About Our Digital Services";
  const description = "Find answers to your questions about SIEL Marketing's services, including branding, SEO, web development, and digital marketing solutions to grow your business.";

  return {
    metadataBase: new URL(domain),
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `${domain}/faq`,
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
    <div className={styles.faqContainer}>
      <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
      <AccordionSection font={lexend} />
    </div>
  );
}
