import type { AsyncState } from "../common";
import type { Category } from "./types";

export type CategoryState = AsyncState & { items: Category[] };
