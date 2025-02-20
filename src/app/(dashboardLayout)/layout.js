import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-1 p-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
