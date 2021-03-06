import Head from "next/head";
import { Navigation } from "../Navigation";
import styles from "./Layout.module.scss";

export function Layout({ children }: any) {
  return (
    <div className={styles.Container}>
      <Head>
        <title>Code with Kids</title>
        <meta
          name="description"
          content="Resources for teaching kids (and adults) to code"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className={styles.Main}>{children}</main>
      <footer className={styles.Footer}></footer>
    </div>
  );
}

export const getLayout = (page: any) => <Layout>{page}</Layout>;
