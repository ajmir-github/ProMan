import Sidebar from "@/features/Sidebar";
import { Outlet, useNavigation } from "react-router-dom";
import {} from "react-router-dom";

export default function RootLayout() {
  const { state } = useNavigation();
  return (
    <div className="flex h-screen bg-base-300">
      <div className="overflow-y-auto shrink-0 flex items-center bg-base-100">
        <Sidebar />
      </div>
      <div className="grow overflow-y-auto ">
        {state === "loading" ? (
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex gap-2 items-center flex-col">
              <div className="loading loading-spinner loading-lg bg-primary"></div>
              <div className="text-primary">Loading....</div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}
