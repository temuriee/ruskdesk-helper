import { useLocale, useTranslations } from "next-intl";
import { Data, Locale } from "../api/aboutApi";

const AboutUs = ({ mainText, subText }: Data) => {
  const t = useTranslations("aboutUs");
  const locale = useLocale() as Locale;

  const paragraphs = mainText?.paragraphs?.[locale] ?? [];

  return (
    <section className="w-full px-7.25 md:px-15 xl:px-25 mb-[50px]">
      <div className="mx-auto w-full max-w-257.75 lg:mt-15 md:mt-12 mt-9">
        <h1 className="font-noto-bold text-[40px] leading-tight text-center">
          {t("title")}
        </h1>

        <div
          className="flex flex-col gap-6 mt-[18px] md:mt-[24px] lg:mt-[28px]"
          // style={{
          //   marginTop: mainText?.margins?.top ?? 78,
          //   marginBottom: mainText?.margins?.bottom ?? 36,
          // }}
        >
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[18px] leading-9 font-[Noto regular]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {subText && (
          <p
            className={`text-[18px] leading-9 font-[Nato regular] ${
              subText.isBold !== false ? "font-bold" : ""
            }`}
          >
            {subText.value[locale]}
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutUs;
