const TITLE = "Cozy Kitchen";

function PageTitle({ children }) {
  const title = children ? `${children} · ${TITLE}` : TITLE;

  return <title>{title}</title>;
}

export default PageTitle;
