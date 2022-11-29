import styles from "../styles/Coffee.module.css";
import { FiCoffee } from "react-icons/fi";
import { GiDonut } from "react-icons/gi";
import { BiCookie } from "react-icons/bi";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Coffee({ data }) {
  const coffee = data;

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const convertImage = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        transition={{ type: "linear" }}
        className={styles.main}
      >
        <div className={styles.container}>
          <div className={styles.gridContainer}>
            <div className={styles.left}>
              <h1>
                {/* Midnight <span className="block">Frappucino</span> */}
                {coffee.title}
              </h1>
              <p>{coffee.content}</p>
              <h4 className={styles.price}>$ {coffee.price}</h4>
            </div>
            <div className={styles.middle}>
              {/* <img src="/testcup.png" alt="" /> */}
              <Image
                src={coffee.coverImage}
                alt="Coffe cup"
                fill
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  convertImage(1, 1)
                )}`}
              />
            </div>
            <div className={styles.right}>
              {}
              <div className={styles.feature}>
                <div className={styles.imgFeature}>
                  <FiCoffee />
                </div>
                <div className={styles.featureText}>
                  <h5>{coffee.featureOne?.title}</h5>
                  <p>{coffee.featureOne?.desc}</p>
                </div>
              </div>
              {}
              <div className={styles.feature}>
                <div className={styles.imgFeature}>
                  <GiDonut />
                </div>
                <div className={styles.featureText}>
                  <h5>{coffee.featureTwo?.title}</h5>
                  <p>{coffee.featureTwo?.desc}</p>
                </div>
              </div>
              {}
              <div className={styles.feature}>
                <div className={styles.imgFeature}>
                  <BiCookie />
                </div>
                <div className={styles.featureText}>
                  <h5>{coffee.featureThree?.title}</h5>
                  <p>{coffee.featureThree?.desc}</p>
                </div>
              </div>
              {}
            </div>
          </div>
        </div>
      </motion.main>
    );
  }
}
