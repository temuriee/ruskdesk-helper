import { Dispatch, SetStateAction } from 'react';

export type BurgerMenuIconProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type BurgerMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export type NavigationLineState = {
  left: number;
  width: number;
  activePath: string;
  setLine: (left: number, width: number) => void;
  setActivePath: (path: string) => void;
};
