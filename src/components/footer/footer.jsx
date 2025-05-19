import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";
import FixedButtons from "./fixedButtons/fixedButtons";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="contact" className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <h4 className={styles.footerTitle}>Contact Us</h4>
        <div className={styles.iconsBox}>
          <a
            href="https://www.linkedin.com/company/sielmarketing"
            target="_blank"
            className={styles.socialLink}
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=37495666833&text=Hello%2C+I%E2%80%99m+interested+in+learning+more+about+your+services+at+SIEL+Marketing.+Could+you+please+provide+details+on+how+your+packages+can+help+my+business+grow%3F+Thank+you%21&type=phone_number&app_absent=0"
            target="_blank"
            className={styles.socialLink}
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:sielmarketing@gmail.com"
            className={styles.socialLink}
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className={styles.privacyBlock}>
          <Link href={"/privacy-policy"} className={styles.link}>
            Privacy Policy
          </Link>
          <div className={styles.line}></div>
          <Link href={"/terms-conditions"} className={styles.link}>
            Terms & Conditions
          </Link>
        </div>
        <p className={styles.copyright}>&#169; {currentYear} Siel Marketing</p>
      </div>
      <FixedButtons />
    </div>
  );
};

export default Footer;
