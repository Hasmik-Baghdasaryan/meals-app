import type { PageTitleProps } from "@/types/propTypes";

const TITLE = "Cozy Kitchen";

function PageTitle({ children }: PageTitleProps) {
  const title = children ? `${children} · ${TITLE}` : TITLE;

  return <title>{title}</title>;
}

export default PageTitle;
