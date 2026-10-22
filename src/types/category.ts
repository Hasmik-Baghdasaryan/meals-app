import type { Status } from "./types";

export type Category = {
  id: string;
  name: string;
  thumb: string;
  description: string;
};

export type RawCategory = {
  idCategory?: string;
  strCategory?: string;
  strCategoryThumb?: string | null;
  strCategoryDescription?: string | null;
};

export type CategoryRootState = {
  items: Category[];
  status: Status;
  error: null | string;
};
