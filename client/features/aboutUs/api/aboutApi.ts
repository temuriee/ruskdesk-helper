import { useQuery } from "@tanstack/react-query";

export type Locale = "ka" | "en";

export type Data = {
  mainText?: {
    paragraphs: Record<Locale, string[]>;
    margins?: {
      top?: number;
      bottom?: number;
    };
    padding?: number;
  };

   subText?: {
    value: Record<Locale, string>;
    isBold?: boolean;
  };
};

export const useAboutUs = () => {
  return useQuery<Data>({
    queryKey: ["about-us"],
    queryFn: async () => {
      const res = await fetch("placeholder");
      if (!res.ok) throw new Error("Failed to fetch About us");

      return res.json()
    },
  });
};
