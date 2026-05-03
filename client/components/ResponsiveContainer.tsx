import React from "react";

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ResponsiveContainer({
  children,
  className = "",
}: ResponsiveContainerProps) {
  // px-7.5 sm:px-15 lg:px-25
  return <div className={`bg-[#F5F1EA] ${className}`}>{children}</div>;
}
