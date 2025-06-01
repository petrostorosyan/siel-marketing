import PrivacyTextSection from "@/components/shared/privacyTextSection/privacyTextSection";
import styles from "./privacy.module.scss";
import { privacyPolicyData } from "../../services/privacyPolicyData";
import { config } from "@/config/env-config";

export async function generateMetadata() {
  const domain = config.domain;
  const imageSource = `${domain}/images/link-covers/logo.webp`;
  const title = "SIEL Marketing Privacy Policy | How We Protect Your Data";
  const description = "Learn about SIEL Marketing's commitment to protecting your privacy and data. Read our privacy policy for details on how we handle and secure your information.";

  return {
    metadataBase: new URL(domain),
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `${domain}/privacy-policy`,
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
      <h1 className={styles.pageTitle}>Privacy Policy</h1>
      {privacyPolicyData.map((data) => {
        return (
          <PrivacyTextSection key={data.id} data={data} />
        )
      })}
    </div>
  );
}
