import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const links = [
  { to: "/", label: "Categories", end: true },
  { to: "/favorites", label: "Favorites" },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img src="/favicon.svg" alt="" width="32" height="32" />
          <span>Cozy Kitchen</span>
        </Link>

        <nav aria-label="Main">
          <ul className={styles.nav}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
