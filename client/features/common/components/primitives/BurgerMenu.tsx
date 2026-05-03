"use client";
import { BurgerMenuProps } from "@/features/common/types/headerType";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { navItems } from "../../data/navItems";
import { useTranslations } from "next-intl";
import { getActivePath } from "../../utils/getActivePath";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "@/features/i18n/LocaleSwitcher";
import { useEffect } from "react";

const BurgerMenu = ({ isOpen, setIsOpen }: BurgerMenuProps) => {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const currentPath = getActivePath(pathname);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="z-[2] fixed inset-0"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            key="burger-menu"
            className="fixed top-[65px] md:top-[65px] right-0 left-0 z-[3] flex flex-col gap-[38px] px-[28px] md:px-[60px] py-[14px] md:rounded-b-[32px] w-full h-[calc(100dvh-72px)] md:h-[calc(100dvh-78px)] overflow-y-auto bg-white/30 backdrop-blur-[14.3px] border border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-[36px] mt-[16px]">
              {navItems.map((item) => {
                const isActive = currentPath === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={item.href}
                    className="flex items-center gap-[16px] min-h-[40px] cursor-pointer"
                    key={item.key}
                  >
                    <Icon
                      className={
                        isActive
                          ? "text-[#4E876D] w-[23px]"
                          : "text-[#64748B] w-[23px]"
                      }
                    />

                    <p
                      className={`text-[#1E293B] text-[18px] ${
                        isActive ? "font-noto-bold" : "font-normal"
                      }`}
                    >
                      {t(item.key)}
                    </p>
                  </Link>
                );
              })}
            </div>

            <LocaleSwitcher />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BurgerMenu;
