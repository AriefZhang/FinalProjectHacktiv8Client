import React from "react";

import Navbar from "../components/CmsAdmin/Navbar";
import Sidebar from "../components/CmsAdmin/Sidebar";
import CmsDealerDashboard from "./CmsDealerDashboard";

export default function CmsDealer() {
  return (
    <div className="min-h-screen w-full flex flex-row">
      <Sidebar />
     <CmsDealerDashboard />
    </div>
  );
}
