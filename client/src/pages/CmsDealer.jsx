import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/CmsAdmin/Sidebar";

export default function CmsDealer() {
  return (
    <div className="min-h-screen w-full flex flex-row">
      <Sidebar />
     {/* <CmsDealerDashboard /> */}
     <Outlet />
    </div>
  );
}
