import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { colors } from "../../../../styles/colorVariables";
import styles from "./accordion.module.scss";

const FaqAccordion = ({ font, data, expanded, setExpanded }) => {
  const handleAccordionChange = (panelId) => (_, isExpanded) => {
    setExpanded(isExpanded ? panelId : false);
  };

  return (
    <div className={styles.accordionBox}>
      {data.map((item) => {
        return (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleAccordionChange(item.id)}
            className={styles.accordion}
            style={{ marginBottom: expanded === item.id && "0px" }}
          >
            <AccordionSummary
              expandIcon={
                <svg
                  width="25"
                  height="14"
                  viewBox="0 0 25 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.expandIcon}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    stroke={colors.black}
                    d="M0.609123 11.0815L10.9796 0.711009C11.6159 0.0746271 12.6477 0.0746271 13.2841 0.711009L23.6545 11.0815C24.2909 11.7178 24.2909 12.7496 23.6545 13.386C23.0182 14.0224 21.9864 14.0224 21.35 13.386L12.1318 4.16782L2.91367 13.386C2.27728 14.0224 1.2455 14.0224 0.609123 13.386C-0.0272596 12.7496 -0.0272596 11.7178 0.609123 11.0815Z"
                    fill="black"
                  />
                </svg>
              }
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
              className={`${styles.accordionSummary} ${font.className}`}
            >
              <div className={`${styles.title} ${font.className}`}>
                {item.title}
              </div>
            </AccordionSummary>
            <AccordionDetails
              className={`${styles.accordionDetails} ${font.className}`}
            >
              {item.type == "description" ? (
                <p className={styles.description}>{item.description}</p>
              ) : (
                <div className={styles.list}>
                  {item.type=="list-desc" && <p className={styles.listTitle}>{item.listTitle}</p>}
                  <ul className={styles.listBox}>
                    {item.list.map((text, index) => {
                      return (
                        <li key={index + 1} className={styles.description}>
                          {text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
