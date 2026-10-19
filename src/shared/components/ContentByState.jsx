import Message from "./Message";

function ContentByState({
  status,
  error,
  isEmpty = false,
  loadingText = "Loading…",
  emptyText = "Nothing found.",
  notFoundText = "Not found.",
  children,
}) {
  if (status === "idle" || status === "loading") {
    return <Message text={loadingText} role="status" />;
  }
  if (status === "failed") return <Message text={error} type="error" role="alert" />;
  if (status === "notFound") return <Message text={notFoundText} />;
  if (isEmpty) return <Message text={emptyText} />;

  return children;
}

export default ContentByState;
