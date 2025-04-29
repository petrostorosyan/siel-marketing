"use client";

import Image from "next/image";
import styles from "./contact.module.scss";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(email, "email value");
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.buttonBox}>
          <a
            href="https://api.whatsapp.com/send/?phone=37495666833&text=Hello%2C+I%E2%80%99m+interested+in+learning+more+about+your+services+at+SIEL+Marketing.+Could+you+please+provide+details+on+how+your+packages+can+help+my+business+grow%3F+Thank+you%21&type=phone_number&app_absent=0"
            className={styles.talkButton}
            target="_blank"
          >
            Lets` talk
          </a>
        </div>
        <div className={styles.contactForm}>
          <h4 className={styles.contactTitle}>Reach out to us anytime</h4>
          <form className={styles.form} onSubmit={(e) => handlesubmit(e)}>
            <input
              type="email"
              placeholder="Your Email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className={styles.submit}>
              <div className={styles.iconBox}>
                <Image
                  width={32}
                  height={38}
                  src={"/images/icons/button-right-arrow.svg"}
                  alt="right-arrow"
                  className={styles.icon}
                />
              </div>
            </button>
          </form>
        </div>

        <div className={styles.imageBox}>
          <Image
            width={250}
            height={386}
            src={"/images/contact/contact-pic.webp"}
            alt="contact-pic"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
