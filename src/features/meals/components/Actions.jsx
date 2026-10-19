import Button from "@/shared/components/Button";

import styles from "./Actions.module.css";

function Actions({ youtube, source }) {
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
