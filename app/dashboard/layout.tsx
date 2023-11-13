import { ReactNode } from "react";
import Sidebar from "@/features/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-base-300">
      <div className="overflow-y-auto shrink-0 flex items-center bg-base-100">
        <Sidebar />
      </div>
      <div className="grow overflow-y-auto">{children}</div>
    </div>
  );
}
