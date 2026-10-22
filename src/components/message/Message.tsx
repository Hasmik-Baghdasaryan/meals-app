import type { MessageProps } from "@/types/componentProps";
import styles from "./Message.module.css";

const MESSAGE_TYPES = {
  info: styles.info,
  error: styles.error,
};

function Message({ text, type = "info", role }: MessageProps) {
  return (
    <p className={MESSAGE_TYPES[type]} role={role}>
      {text}
    </p>
  );
}

export default Message;
