"use client";

import { useState } from "react";
import FaqAccordion from "./accordion/accordion";
import styles from "./accordionSection.module.scss";
import { firstFaqData, secondFaqData } from "@/services/faqData";

const AccordionSection = ({ font }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.faqContent}>
      <FaqAccordion
        font={font}
        data={firstFaqData}
        expanded={expanded}
        setExpanded={setExpanded}
      />

      <FaqAccordion
        font={font}
        data={secondFaqData}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    </div>
  );
};

export default AccordionSection;
