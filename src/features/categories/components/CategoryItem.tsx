import Card from "@/shared/components/Card";
import CardLink from "@/shared/components/CardLink";

import type { CategoryItemProps } from "@/types/propTypes";

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <CardLink to={`/category/${encodeURIComponent(category.name.toLowerCase())}`}>
      <Card src={category.thumb} title={category.name} />
    </CardLink>
  );
}

export default CategoryItem;
