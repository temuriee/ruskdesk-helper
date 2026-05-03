"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Act from "@/icons/act.svg";
import Search from "@/icons/search.svg";
import Condition from "@/icons/condition.svg";
import Think from "@/icons/think.svg";
import Love from "@/icons/love.svg";
import Document from "@/icons/document.svg";
import ArrowRight from "@/icons/verbs/arrow-right.svg";
import All from "@/icons/verbs/All.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";

const categoryMeta = [
  {
    type: "მოქმედება",
    Icon: Act,
    iconClass: "text-[#FF7244]",
    buttonClass: "border-[#FF7244] text-[#FF7244]",
    hoverClass: "group-hover:text-[#FF7244]",
  },
  {
    type: "მდგომარეობა",
    Icon: Condition,
    iconClass: "text-[#1F8343]",
    buttonClass: "border-[#1F8343] text-[#1F8343]",
    hoverClass: "group-hover:text-[#1F8343]",
  },
  {
    type: "კოგნიცია",
    Icon: Think,
    iconClass: "text-[#A855F7]",
    buttonClass: "border-[#A855F7] text-[#A855F7]",
    hoverClass: "group-hover:text-[#A855F7]",
  },
  {
    type: "გრძნობა",
    Icon: Love,
    iconClass: "text-[#FF5BAD]",
    buttonClass: "border-[#FF5BAD] text-[#FF5BAD]",
    hoverClass: "group-hover:text-[#FF5BAD]",
  },
  {
    type: "არსებობა",
    Icon: Document,
    iconClass: "text-[#137FEC]",
    buttonClass: "border-[#137FEC] text-[#137FEC]",
    hoverClass: "group-hover:text-[#137FEC]",
  },
] as const;

const Verbs = () => {
  const t = useTranslations("landing");
  const [filterOrder, setFilterOrder] = useState<"ა-ჰ" | "ჰ-ა">("ა-ჰ");
  const mockVerbs = Array.from({ length: 12 }, (_, index) => {
    const category = categoryMeta[index % categoryMeta.length];
    return {
      id: index,
      title: "მონაწილეობს",
      category: category.type,
      Icon: category.Icon,
      iconClass: category.iconClass,
      hoverClass: category.hoverClass,
    };
  });

  return (
    <div className="px-[29px] md:px-[60px] xl:px-[100px] lg:mt-[60px] md:mt-[48px] mt-[36px]">
      <div className="w-full max-w-[1240px] mx-auto">
        <div>
          {/* Top Part */}
          <div className="flex flex-col gap-2">
            <h2 className="font-noto-bold text-[36px] leading-[40px]">
              ზმნები
            </h2>
            <p className="text-[18px]">მოძებნე შენთვის სასურველი ზმნები</p>
          </div>

          <div className="lg:mt-[36px] md:mt-[28px] mt-[18px] flex justify-between md:items-center gap-4.5 md:gap-4 flex-col md:flex-row ">
            {/*  Search Input */}
            <div className="relative inline-block w-full max-w-[608px]">
              <input
                type="text"
                placeholder={t("search")}
                className="w-full px-[26px] py-[14.5px] bg-white border-2 border-[#CBD5E1] rounded-[36px] text-[14px] outline-none focus:border-[#4E876D] focus:ring-1 focus:ring-[#4E876D]/25"
              />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-[#131C2680]" />
            </div>
            {/* Filter Order Toggle */}
            <div className="flex flex-col gap-2">
              <div className="w-[150px] min-w-[150px] relative inline-flex h-[44px] rounded-full bg-[#F1F5F9] p-[4px] border border-[#CBD5E1]">
                <motion.div
                  className="absolute top-[4px] left-[4px] h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-white shadow-[0_0_4px_rgba(0,0,0,0.16)]"
                  animate={{ x: filterOrder === "ა-ჰ" ? "0%" : "100%" }}
                  transition={{ ease: "easeInOut", duration: 0.15 }}
                />

                {(["ა-ჰ", "ჰ-ა"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFilterOrder(option)}
                    className="relative flex flex-1 items-center justify-center rounded-full text-[14px] font-medium cursor-pointer"
                    aria-pressed={option === filterOrder}
                  >
                    <span
                      className={
                        option === filterOrder
                          ? "text-[#1E293B]"
                          : "text-[#64748B]"
                      }
                    >
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category List */}
          <div className="flex lg:mb-[44px] md:mb-[32px] mb-[24px] lg:mt-[34px] md:mt-[24px] mt-[18px]">
            <ul className="flex flex-wrap gap-3 flex-col sm:flex-row">
              <li>
                <button className="p-2 rounded-full bg-[#4E876D] flex items-center gap-1 text-[14px] font-noto-regular text-white mr-[24px] font-[500] cursor-pointer w-auto">
                  <All className="text-white" />
                  <p>ყველა</p>
                </button>
              </li>
              {categoryMeta.map((category) => (
                <li key={category.type}>
                  <button
                    type="button"
                    className={`border rounded-full px-4 py-1 text-[14px] font-noto-semibold bg-white flex items-center gap-2 cursor-pointer ${category.buttonClass}`}
                  >
                    <div className="h-[28px] flex items-center">
                      <category.Icon className={category.iconClass} />
                    </div>
                    <p>{category.type}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Grid for Verbs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[24px] gap-y-[18px]">
            {mockVerbs.map((verb) => {
              const Icon = verb.Icon;
              return (
                <div
                  key={verb.id}
                  className="group bg-[#FFFFFF] p-4 flex flex-col border-2 border-[#1E293B] rounded-xl gap-4 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_-32px_rgba(30,41,59,0.35)]"
                >
                  {/* Icon + Category */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-[36px] h-[36px] flex items-center">
                      <Icon className={verb.iconClass} />
                    </div>
                    <span
                      className={`text-[13px] font-medium text-[#475569] ${verb.hoverClass}`}
                    >
                      {verb.category}
                    </span>
                  </div>

                  {/* Verb Name */}
                  <p className="font-noto-bold leading-[27.6px] text-[#475569] ${verb.hoverClass}">
                    {verb.title}
                  </p>

                  {/* Splitter */}
                  <div className="w-full h-[0.5px] bg-[#64748B33]" />

                  {/* Detail Page part */}
                  <Link href="#" className="flex justify-between items-center">
                    <p
                      className={`font-noto-bold text-[12px] text-[#475569] ${verb.hoverClass}`}
                    >
                      დეტალური ნახვა
                    </p>
                    <ArrowRight
                      className={`w-4 h-4 text-[#64748B] ${verb.hoverClass}`}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center my-[60px]">Pagination</div>
      </div>
    </div>
  );
};

export default Verbs;
