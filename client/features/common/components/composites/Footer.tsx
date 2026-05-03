"use client";

import Image from "next/image";
import { footerData } from "../../data/footerData";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-[#FFFFFF] flex justify-center flex-col items-center pt-8 pb-3 px-7.25 md:px-15 xl:px-25">
      <div className="max-w-310 w-full flex flex-wrap justify-between gap-x-8 gap-y-4.5">
        <div className="flex flex-wrap w-full justify-between gap-x-8 gap-y-[18px]">
          <div className="w-full  lg:w-[181px] border-b sm:border-b-0 border-[#137FEC33] pb-[18px]">
            <h3 className="mb-3 text-[#131C26] font-bold">{t("docs.title")}</h3>
            <ul className="space-y-2">
              {footerData.docs[0].items.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-[#131C26] text-[14px]">
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-[190px] border-b sm:border-b-0 border-[#137FEC33] pb-[18px]">
            {footerData.donor.map((donorItem, index) => (
              <div key={index}>
                <h3 className="mb-3 text-[#131C26] font-bold">
                  {t(donorItem.title)}
                </h3>
                <p className="text-[#131C26] text-[14px] leading-[22px]">
                  {t(donorItem.content)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex w-full lg:max-w-[411px] justify-between border-b sm:border-b-0 border-[#137FEC33] pb-[18px]">
            <div>
              <h3 className="font-bold mb-3 text-[#131C26]">
                {t(footerData.contact[0].title)}
              </h3>

              <div className="flex flex-col gap-5">
                {footerData.contact.map((eachElement) => (
                  <div key={eachElement.id} className="flex flex-col gap-5">
                    <div className="flex items-center w-full gap-2">
                      <div className="w-[28px] h-[28px] flex justify-center items-center rounded-[4px] bg-[#F7F7F7]">
                        <Image
                          src="/images/footerImages/svg/message.svg"
                          alt="email logo"
                          width={15}
                          height={12}
                        />
                      </div>
                      <p className="text-[#131C26] text-[14px]">
                        {eachElement.email}
                      </p>
                    </div>

                    <div className="flex items-center w-full gap-2">
                      <div className="w-[28px] h-[28px] flex justify-center items-center rounded-[4px] bg-[#F7F7F7]">
                        <Image
                          src="/images/footerImages/svg/location.svg"
                          alt="location logo"
                          width={15}
                          height={12}
                        />
                      </div>
                      <p className="text-[#131C26] text-[14px]">
                        {t(footerData.contact[0].location)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-3">
              {footerData.socials.map((eachElement) => (
                <div
                  key={eachElement.id}
                  className="w-[40px] h-[40px] cursor-pointer flex justify-center items-center rounded-[50%] bg-[#F7F7F7] hover:bg-[#ececec] transition-colors"
                >
                  <a href={eachElement.href}>
                    <Image
                      src={eachElement.icon}
                      width={20}
                      height={20}
                      alt="social logo"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full  lg:w-[250px] border-b sm:border-b-0 border-[#137FEC33]  last:border-b-0">
          <div className="flex flex-col gap-4">
            <h3 className="text-[#131C26] font-bold">
              {t(footerData.partners[0].title)}
            </h3>

            <div className="flex flex-col gap-5 sm:border-b-0 border-[#137FEC33]  last:border-b-0">
              {footerData.partners.map((eachPartner) => (
                <div
                  key={eachPartner.id}
                  className="flex flex-wrap items-center gap-6 lg:gap-3 border-b sm:border-b-0 border-[#137FEC33] pb-[18px] sm:pb-0 last:border-b-0"
                >
                  {eachPartner.images.map((img) => (
                    <div key={img.id}>
                      <a href={img.href}>
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          className="object-contain"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              ))}

              <div className="flex lg:hidden gap-3 ">
                {footerData.socials.map((eachElement) => (
                  <div
                    key={eachElement.id}
                    className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#F7F7F7] hover:bg-[#ececec] transition-colors"
                  >
                    <a href={eachElement.href}>
                      <Image
                        src={eachElement.icon}
                        width={20}
                        height={20}
                        alt="social logo"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-310 w-full bg-[#137FEC20] h-px mt-4.5 mb-3"></div>

      <p className="text-[12px] text-[#131C2690]">
        © 2026 ყველა უფლება დაცულია.
      </p>
    </footer>
  );
};

export default Footer;
