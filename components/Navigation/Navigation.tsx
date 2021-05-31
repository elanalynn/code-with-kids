import Link from "next/link";
import styles from "./Navigation.module.scss";

const navItems = ["About", "Adults", "Activities", "Printables", "Blog"];

function NavItem({ href, name }: any) {
  return (
    <li>
      <Link href={href}>{name}</Link>
    </li>
  );
}

export function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.Brand}>
        <Link href={"/"}>CWK</Link>
      </div>
      <ul>
        {navItems.map((item) => (
          <NavItem
            href={`/${item.toLocaleLowerCase()}`}
            key={item}
            name={item}
          />
        ))}
      </ul>
    </nav>
  );
}
