import AboutUs from "@/components/aboutUs/aboutUsComponent";
import styles from "./page.module.scss";
import HeroSection from "@/components/heroSection/heroSection";
import SielInfo from "@/components/sielInfo/sielInfo";
import OurServices from "@/components/ourServices/ourServices";
import Packages from "@/components/packages/packages";
import Testimonials from "@/components/testimonials/testimonials";
import RightChoice from "@/components/rightChoice/rightChoice";
import Contact from "@/components/contact/contact";
import { config } from "@/config/env-config";

export async function generateMetadata() {
  const domain = config.domain;
  const imageSource = `${domain}/images/link-covers/logo.webp`;
  const title = "SIEL Marketing | Expert Digital Marketing Solutions for Business Growth";
  const description = "SIEL Marketing offers expert digital marketing services, including branding, SEO, web development and more, helping businesses grow with data-driven strategies.";

  return {
    metadataBase: new URL(domain),
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `${domain}`,
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

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <SielInfo />
      <AboutUs />
      <OurServices />
      <Packages />
      <Testimonials />
      <RightChoice />
      <Contact />
    </div>
  );
}
