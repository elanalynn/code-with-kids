import Link from "next/link";
import styles from "./Navigation.module.scss";

export function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.Brand}>CWK</div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/adults">
            <a>Adults</a>
          </Link>
        </li>
        <li>
          <Link href="/printables">
            <a>Printables</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
