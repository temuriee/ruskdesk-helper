import Categories from "../primitives/Categories";
import Search from "@/icons/search.svg";
import { useTranslations } from "next-intl";

const SearchSection = () => {
  const t = useTranslations("landing");

  return (
    <section className="w-full min-h-dvh px-7.25 md:px-15 xl:px-25 mt-9 md:mt-12 lg:mt-15 pb-16">
      <div className="mx-auto w-full max-w-310 text-center">
        <h1 className="lg:text-[36px] font-noto-bold mb-4 text-[24px] lg:leading-10 leading-9 lg:max-w-[1056px] mx-auto md:max-w-120.5 max-w-83">
          {t("title")}
        </h1>
        <p className="lg:text-[18px] font-normal text-[14px] text-[#475569] lg:max-w-256.25 md:max-w-120.5 max-w-83 mx-auto">
          {t("description")}
        </p>
        <div className="mx-auto mt-4 md:mt-6 lg:mt-9 relative inline-block w-full md:max-w-120.5 lg:max-w-152">
          <input
            type="text"
            placeholder={t("search")}
            className="w-full pl-6 pr-9 h-12 bg-white border-2 border-[#CBD5E1] rounded-[36px] outline-none focus:border-[#4E876D] focus:ring-1 focus:ring-[#4E876D]/25"
          />
          <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-[#131C2680]" />
        </div>
        <Categories />
      </div>
    </section>
  );
};

export default SearchSection;
