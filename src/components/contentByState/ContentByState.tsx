import type { ContentByStateProps } from "@/types/componentProps";
import Message from "../message/Message";

function ContentByState({
  status,
  error,
  isEmpty = false,
  loadingText = "Loading…",
  emptyText = "Nothing found.",
  notFoundText = "Not found.",
  children,
}: ContentByStateProps) {
  if (status === "idle" || status === "loading") {
    return <Message text={loadingText} role="status" />;
  }
  if (status === "failed") return <Message text={error} type="error" role="alert" />;
  if (status === "notFound") return <Message text={notFoundText} role="alert" />;
  if (isEmpty) return <Message text={emptyText} role="alert" />;

  return children;
}

export default ContentByState;
