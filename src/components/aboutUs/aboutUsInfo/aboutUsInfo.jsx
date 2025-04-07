"use client";

import useScreenSize from "@/functions/hooks/useScreenSize";
import styles from "./abousInfo.module.scss";
import { useEffect, useRef, useState } from "react";

const textData = [
  {
    id: 1,
    text: `<p>At <b>SIEL Marketing</b>, we provide comprehensive, end-to-end solutions to empower businesses at every stage of their growth. From building a strong brand identity to creating engaging content, designing interactive websites, and managing full-scale digital marketing campaigns, we offer everything from A to Z. Our services include <b>branding, graphic design, website development, social media marketing (SMM), search engine optimization (SEO), email marketing, AI-powered ad optimization, chatbot integration</b>, and much more.</p>`,
  },
  {
    id: 2,
    text: `<p>Our team of highly skilled professionals is certified by industry leaders such as Google and Meta, ensuring that our strategies are innovative, data-driven, and tailored to each client’s unique needs. With a proven track record of top-rated success on freelancing platforms, we have earned stellar reviews, managed high volumes of work, and consistently delivered exceptional results.</p>`,
  },
  {
    id: 3,
    text: `<p><b>SIEL Marketing</b> is more than a digital marketing agency—we are your strategic partner, dedicated to helping you achieve your goals with clarity, efficiency, and impact. Let us simplify the process and help you navigate the ever-evolving digital landscape, creating meaningful connections and driving measurable success.</p>`,
  },
];

const AboutUsInfo = () => {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);
  const { width: screenSize, height } = useScreenSize();
  const [contentBoxHeight, setContentBoxHeight] = useState("30px");
  const contentRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (open && contentRef.current) {
      setTimeout(() => {
        setContentBoxHeight(contentRef.current.scrollHeight);
      }, 0);
    }
  }, [open, screenSize]);

  return (
    <div className={styles.textBlock}>
      <h3 className={styles.title}>About Us</h3>

      <p className={styles.text}>
        <b>SIEL Marketing</b> was founded by industry experts with over{" "}
        <b>15 years</b> of experience in freelancing and agency work. Our
        founders, who have excelled both as freelancers and agency specialists,
        bring a deep understanding of the challenges faced by businesses and
        independent professionals alike. This knowledge inspired the creation of
        SIEL, with the vision to simplify workflows and create a seamless
        experience: one client, one manager, clear communication.
      </p>

      {isClient && (
        <div
          className={styles.textBox}
          ref={contentRef}
          style={{
            height:
              screenSize > 600
                ? "unset"
                : open
                ? `${contentBoxHeight}px`
                : "30px",
          }}
        >
          {textData.map((item) => (
            <p
              key={item.id}
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: item.text }}
            ></p>
          ))}
        </div>
      )}

      <button onClick={() => setOpen(!open)} className={styles.moreButton}>
        {open ? "Less" : "More"}
      </button>
    </div>
  );
};

export default AboutUsInfo;
