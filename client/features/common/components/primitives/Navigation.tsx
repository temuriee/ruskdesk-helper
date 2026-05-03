"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { navItems } from "../../data/navItems";
import { getActivePath } from "../../utils/getActivePath";

const Navigation = () => {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const currentPath = getActivePath(pathname);

  return (
    <nav>
      <div className="hidden relative lg:flex items-center gap-[36px]">
        {navItems.map((item) => {
          const isActive = currentPath === item.href;

          return (
            <Link
              key={item.key}
              href={item.href}
              className="relative py-[12px] font-semibold text-[#131C26] text-[14px]"
            >
              {t(item.key)}

              {isActive && (
                <motion.div
                  layoutId="active-nav-underline"
                  className="right-0 bottom-0 left-0 absolute bg-[#4E876D] h-[2px]"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
