import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Coffee from "../components/Coffee";
import Featured from "../components/Featured";

import { getAllCoffee } from "../lib/coffeedata";

export default function Home() {
  const coffeeData = getAllCoffee();
  return (
    <div className={styles.container}>
      <Head>
        <title>Caffee Bel Gusto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Coffee data={coffeeData[0]} />;
      <Featured />
    </div>
  );
}
