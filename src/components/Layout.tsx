import Tabbar from "@/components/Tabbar";
import useNavigation from "@/utils/hooks/useNavigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { currentRoute, setCurrentRoute } = useNavigation();

  console.log("currentRoute", currentRoute);
  return (
    <div className="h-full">
      <div className="">{children}</div>
      <Tabbar />
    </div>
  );
}
