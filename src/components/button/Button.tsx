import { Link } from "react-router-dom";

import type {
  ButtonProps,
  ExternalLinkProps,
  InternalLinkProps,
  NativeButtonProps,
} from "@/types/componentProps";

import styles from "./Button.module.css";

const BUTTON_CLASSES = {
  primary: styles.primary,
  secondary: styles.secondary,
};

function Button({ variant = "primary", children, ...rest }: ButtonProps) {
  const className = [styles.button, BUTTON_CLASSES[variant]].filter(Boolean).join(" ");

  if ("to" in rest && rest.to !== undefined) {
    const { to, ...linkRest } = rest as InternalLinkProps;
    return (
      <Link className={className} to={to} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkRest } = rest as ExternalLinkProps;
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...linkRest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} {...(rest as NativeButtonProps)}>
      {children}
    </button>
  );
}

export default Button;
