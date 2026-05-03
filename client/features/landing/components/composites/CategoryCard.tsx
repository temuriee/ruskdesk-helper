import { Category } from "../../types/category";
import Image from "next/image";

interface Props {
  item: Category;
}

const CategoryCard = ({ item }: Props) => {
  const { icon: Icon, cardClassnames, iconClassnames, title, subtitle } = item;
  return (
    <div
      className={`w-full border-2 border-[#1E293B] rounded-xl bg-white p-6.25 flex flex-row-reverse justify-between  items-center md:flex-col md:items-start gap-2 border-t-8 ${cardClassnames}`}
    >
      {/* ICON */}
      <div
        className={`w-9 h-9 p-2 rounded-lg flex items-center justify-center text-white ${iconClassnames}`}
      >
        <Icon />
      </div>

      {/* TEXT */}
      <div className="text-left">
        <h3 className="font-semibold text-[20px] mb-2">{title}</h3>
        <p className="text-[16px] text-[#131C26] font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
