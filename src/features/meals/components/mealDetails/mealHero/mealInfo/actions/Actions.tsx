import Button from "@/components/button/Button";

import type { ActionProps } from "@/types/componentProps";

import styles from "./Actions.module.css";

function Actions({ youtube, source }: ActionProps) {
  return (
    <div className={styles.actions}>
      {youtube && <Button href={youtube}>Watch on YouTube</Button>}
      {source && (
        <Button href={source} variant="secondary">
          Original recipe
        </Button>
      )}
    </div>
  );
}

export default Actions;
