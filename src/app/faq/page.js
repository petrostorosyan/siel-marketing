
import AccordionSection from "./accordionSection/accordionSection";
import styles from "./faq.module.scss";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: ["variable"] });

export default function Page() {
  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
      <AccordionSection font={lexend} />
    </div>
  );
}
