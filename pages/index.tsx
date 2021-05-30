import Link from "next/link";
import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>Code with Kids</h1>

      <p className={styles.description}>
        There are so many online resources to learn how to code, <br />
        but it can still be hard to get started on your own. <br />
        It helps to have a guide.
      </p>
      <p>
        This is a collection of resources for teaching kids (and adults) to
        code.
      </p>
      <Link href={"./start"}>
        <button className={styles.button}>Start here</button>
      </Link>
    </Layout>
  );
}
