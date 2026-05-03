import { categoriesData } from "../../data/categoriesData";
import CategoryCard from "../composites/CategoryCard";

const Categories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:mt-9 md:mt-6 mt-4 justify-items-center">
      {categoriesData.map((item) => (
        <CategoryCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
