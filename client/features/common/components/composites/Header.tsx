"use client";
import { useEffect, useState } from "react";
import LocaleSwitcher from "@/features/i18n/LocaleSwitcher";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../primitives/Navigation";
import BurgerMenuIcon from "../primitives/BurgerMenuIcon";
import BurgerMenu from "../primitives/BurgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1023) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-[4] flex justify-center bg-[#F5F1EA] px-[29px] md:px-[60px] xl:px-[100px] py-[10px] md:py-[2px] lg:py-[7px] border-[#1E293B] border-b-[2px] w-full">
        <div className="flex justify-between items-center w-full max-w-[1240px]">
          <Link
            href={`/`}
            className="w-[126px] md:w-[170px] h-[47px] md:h-[64px]"
          >
            <Image
              src={"/images/commonImages/svg/logo.svg"}
              alt="logo"
              width={170}
              height={64}
            />
          </Link>
          <Navigation />
          <div>
            <div className="hidden lg:flex w-full max-w-[144px]">
              <LocaleSwitcher />
            </div>
            <BurgerMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </header>
      <div aria-hidden="true" className="h-[72px] md:h-[78px] lg:h-[82px]" />
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
