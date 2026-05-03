import { Category } from "../types/category";
import act from "@/icons/act.svg";
import condition from "@/icons/condition.svg";
import think from "@/icons/think.svg";
import love from "@/icons/love.svg";
import document from "@/icons/document.svg";

export const categoriesData: Category[] = [
  {
    id: 1,
    title: "მოქმედება",
    subtitle: "სირბილი",
    icon: act,
    cardClassnames: "border-t-[8px] border-t-[#FF7244]",
    iconClassnames: "bg-[#FF7244]",
  },
  {
    id: 2,
    title: "მდგრადობა",
    subtitle: "ჯდომა",
    icon: condition,
    cardClassnames: "border-t-[8px] border-t-[#4E876D]",
    iconClassnames: "bg-[#4E876D]",
  },
  {
    id: 3,
    title: "კოგნიცია",
    subtitle: "ფიქრი",
    icon: think,
    cardClassnames: "border-t-[8px] border-t-[#A855F7]",
    iconClassnames: "bg-[#A855F7]",
  },
  {
    id: 4,
    title: "გრძნობა",
    subtitle: "ყვარება",
    icon: love,
    cardClassnames: "border-t-[8px] border-t-[#FF5BAD]",
    iconClassnames: "bg-[#FF5BAD]",
  },
  {
    id: 5,
    title: "არსებობა",
    subtitle: "ყოფნა",
    icon: document,
    cardClassnames: "border-t-[8px] border-t-[#137FEC]",
    iconClassnames: "bg-[#137FEC]",
  },
];
