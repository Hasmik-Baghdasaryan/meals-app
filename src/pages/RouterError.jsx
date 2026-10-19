import { useRouteError } from "react-router-dom";

import Message from "@/shared/components/Message";
import PageTitle from "@/shared/components/PageTitle";
import BackToHome from "@/shared/components/BackToHome";

import styles from "./RouteError.module.css";

function RouteError() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <PageTitle>Something went wrong</PageTitle>
      <section className={styles.page}>
        <h1>Something went wrong</h1>
        <Message
          text="An unexpected error occurred. Please try again."
          type="error"
          role="alert"
        />
        <BackToHome />
      </section>
    </>
  );
}

export default RouteError;
