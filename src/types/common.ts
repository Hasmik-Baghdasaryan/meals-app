export type Status = "idle" | "loading" | "succeeded" | "failed" | "notFound";
export type StringOrNull = string | null;

export type AsyncState = {
  status: Status;
  error: string | null;
};
