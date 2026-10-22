import Card from "@/components/card/Card";
import CardLink from "@/components/cardLink/CardLink";

import type { CategoryItemProps } from "@/types/category/props";

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <CardLink to={`/category/${encodeURIComponent(category.name.toLowerCase())}`}>
      <Card src={category.thumb} title={category.name} />
    </CardLink>
  );
}

export default CategoryItem;
