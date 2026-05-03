"use client";
import { motion } from "motion/react";
import { BurgerMenuIconProps } from "../../types/headerType";

const BurgerMenuIcon = ({ isOpen, setIsOpen }: BurgerMenuIconProps) => {
  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="lg:hidden flex flex-col justify-between items-center h-[20px] cursor-pointer"
    >
      <motion.div
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 11 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="bg-[#4E876D] rounded-[8px] w-[32px] h-[3px]"
      />
      <motion.div
        animate={{
          x: isOpen ? -20 : 0,
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="bg-[#4E876D] rounded-[8px] w-[32px] h-[3px]"
      />
      <motion.div
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="bg-[#4E876D] rounded-[8px] w-[32px] h-[3px]"
      />
    </button>
  );
};

export default BurgerMenuIcon;
