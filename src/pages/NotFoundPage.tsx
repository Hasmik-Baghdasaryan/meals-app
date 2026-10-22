import BackToHome from "@/shared/components/BackToHome";
import PageTitle from "@/shared/components/PageTitle";

import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <section className={styles.page}>
      <PageTitle>Page not found</PageTitle>
      <p className={styles.code} aria-hidden="true">
        404
      </p>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.text}>
        The page you are looking for doesn’t exist or has moved.
      </p>
      <BackToHome />
    </section>
  );
}

export default NotFoundPage;
