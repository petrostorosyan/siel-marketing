"use client";

import { usePathname } from "next/navigation";
import styles from "./socialIcons.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { getBaseUrl } from "../../../../../lib/getBaseUrl";

const socialIconsData = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/sharer/sharer.php?u=https://www.sielmarketing.com/Blog/Colors-You-Choose",
  },
  {
    id: 2,
    icon: <FaXTwitter />,
    link: "https://twitter.com/share?url=https://www.sielmarketing.com/Blog/Colors-You-Choose",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/shareArticle?mini=true&url=https://www.sielmarketing.com/Blog/Colors-You-Choose",
  },
  {
    id: 4,
    icon: <FaWhatsapp />,
    link: "https://api.whatsapp.com/send?text=https://www.sielmarketing.com/Blog/Colors-You-Choose",
  },
  {
    id: 5,
    icon: <FaTelegramPlane />,
    link: "https://t.me/share/url?url=https://www.sielmarketing.com/Blog/Colors-You-Choose",
  },
  {
    id: 6,
    icon: <FaLink />,
    link: "",
  },
];

const SocialIcons = () => {
  const pathname = usePathname();
  const baseURL = getBaseUrl();

  const handleCopyLink = (e) => {
    e.preventDefault();

    const fullURL = `${baseURL}${pathname}`;
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(fullURL)
        .then(() => alert("Link copied to the clipboard!"))
        .catch(() => alert("Failed to copy the link."));
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = fullURL;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        alert("Link copied to the clipboard!");
      } catch {
        alert("Failed to copy the link.");
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className={styles.socialIconsContainer}>
      <p className={styles.share}>Share</p>
      <div className={styles.iconsBox}>
        {socialIconsData.map((item) => {
          return (
            <a
              key={item.id}
              href={item.link}
              className={styles.socialLink}
              onClick={item.link == "" ? handleCopyLink : undefined}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialIcons;
