import Card from "@/shared/components/Card";
import CardLink from "@/shared/components/CardLink";

function CategoryItem({ category }) {
  return (
    <CardLink to={`/category/${encodeURIComponent(category.name.toLowerCase())}`}>
      <Card src={category.thumb} title={category.name} />
    </CardLink>
  );
}

export default CategoryItem;
