"use client";

import Image from "next/image";
import styles from "./package.module.scss";
import PrimaryButton from "@/components/shared/logo/primaryButton/primaryButton";
import PackageCard from "../packageCard/packageCard";
import useScreenSize from "@/functions/hooks/useScreenSize";
import { useEffect, useState } from "react";

const Package = ({ data }) => {
  const { width: screenSize, height } = useScreenSize();
  const [imageSizes, setImageSizes] = useState({
    bag: { width: 84, height: 77 },
    diamond: { width: 95, height: 114 },
  });

  useEffect(() => {
    if (screenSize < 600) {
      setImageSizes({
        bag: { width: 54, height: 65 },
        diamond: { width: 65, height: 84 },
      });
    } else {
      setImageSizes({
        bag: { width: 84, height: 77 },
        diamond: { width: 95, height: 114 },
      });
    }
  }, [screenSize]);

  const currentImageSize = data.id === 1 ? imageSizes.bag : imageSizes.diamond;

  return (
    <div className={styles.packageWrapper}>
      <div className={styles.titleAndImage}>
        <h4 className={styles.packageTitle}>{data.title}</h4>
        <Image
          src={data.imageSource}
          width={currentImageSize.width}
          height={currentImageSize.height}
          alt={data.title}
        ></Image>
      </div>
      <p className={styles.packageDescription}>{data.description}</p>
      <div className={styles.paymentBlock}>
        <p className={styles.price}>${data.price}</p>
        <div className={styles.button}>
          <PrimaryButton
            title="Get Started"
            color="black"
            link="https://api.whatsapp.com/send/?phone=37495666833&text=Hello%2C+I%E2%80%99m+interested+in+learning+more+about+your+services+at+SIEL+Marketing.+Could+you+please+provide+details+on+how+your+packages+can+help+my+business+grow%3F+Thank+you%21&type=phone_number&app_absent=0"
          />
        </div>
      </div>

      <div className={styles.cardsBlock}>
        {data.cardsInfo.map((item) => {
          return <PackageCard key={item.id} listData={item} />;
        })}
      </div>
    </div>
  );
};

export default Package;
