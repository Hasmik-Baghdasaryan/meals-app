import { Link } from "react-router-dom";

import styles from "./Button.module.css";

const BUTTON_CLASSES = {
  primary: styles.primary,
  secondary: styles.secondary,
};

function Button({ variant = "primary", to, href, children, ...rest }) {
  const className = [styles.button, BUTTON_CLASSES[variant]].filter(Boolean).join(" ");

  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}

export default Button;
