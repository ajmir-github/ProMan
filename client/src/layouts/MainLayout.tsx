import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function MainLayout({ children }: Props) {
  const currentTheme = "cupcake";
  return (
    <div data-theme={currentTheme} className="w-full h-screen overflow-hidden">
      {children}
    </div>
  );
}
