import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/shared/components/Button";
import Message from "@/shared/components/Message";
import { fetchRandomMeal } from "../mealsService";

import styles from "./RandomMeal.module.css";

function RandomMeal() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle");
  const controllerRef = useRef(null);

  useEffect(() => () => controllerRef.current?.abort(), []);

  async function handleClick() {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    setStatus("loading");

    try {
      const meal = await fetchRandomMeal(controller.signal);
      if (!meal) throw new Error("No meal returned");

      navigate(`/category/${encodeURIComponent(meal.category)}/${meal.id}`);
    } catch (error) {
      if (error.name === "AbortError") return;
      setStatus("failed");
    }
  }

  const isLoading = status === "loading";

  return (
    <section className={styles.surprise}>
      <p className={styles.text}>Can’t decide what to cook?</p>
      <Button onClick={handleClick} disabled={isLoading} aria-busy={isLoading}>
        {isLoading ? "Finding a recipe…" : "Surprise me"}
      </Button>
      {status === "failed" && (
        <Message text="Couldn’t find a recipe. Try again." variant="error" role="alert" />
      )}
    </section>
  );
}

export default RandomMeal;
