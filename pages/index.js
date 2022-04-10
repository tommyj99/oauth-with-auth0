import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oauth0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my Home Page!</h1>
      </main>
    </div>
  );
}
