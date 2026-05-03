import { FC, SVGProps } from "react";

export interface Category {
  id: number;
  title: string;
  subtitle: string;
  icon: FC<SVGProps<SVGElement>>;
  cardClassnames: string;
  iconClassnames: string;
}
