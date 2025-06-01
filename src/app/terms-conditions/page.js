import PrivacyTextSection from "@/components/shared/privacyTextSection/privacyTextSection";
import { termsConditionsData } from "@/services/termsConditionsData";
import styles from "./terms.module.scss";
import { config } from "@/config/env-config";

export async function generateMetadata() {
  const domain = config.domain;
  const imageSource = `${domain}/images/link-covers/logo.webp`;
  const title = "SIEL Marketing Terms and Conditions | Our Service Guidelines";
  const description = "SIEL Marketing offers expert digital marketing services, including branding, SEO, web development and more, helping businesses grow with data-driven strategies.";

  return {
    metadataBase: new URL(domain),
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `${domain}/terms-conditions`,
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
    <div className={styles.PrivacyContainer}>
      <h1 className={styles.pageTitle}>Terms and Conditions</h1>
      {termsConditionsData.map((data) => {
        return (
          <PrivacyTextSection key={data.id} data={data} />
        )
      })}
    </div>
  );
}