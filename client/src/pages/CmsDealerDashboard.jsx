import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dealerApi } from "../API";

import Navbar from "../components/CmsAdmin/Navbar";
import Table from "../components/CmsAdmin/table/templates/Table";

export default function CmsDealerDashboard() {
  const [cars, setCars] = useState([]);
  const id = localStorage.getItem("id");

  const fetchCars = async () => {
    const response = await dealerApi.get(`/${id}`);
    setCars(response.data.Cars);
  };

  useEffect(() => {
    fetchCars();
  }, [])

  return (
    <div className="relative w-10/12">
      <Navbar />
      {/* Header */}
      <div className="h-full flex flex-col bg-slate-100 md:pt-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div className="flex flex-wrap">
              <div className="w-full mb-12">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-2xl rounded-xl">
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold font-open-sans py-2 text-slate-900">
                          Cars List
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <Table cars={cars} fetchCars={fetchCars}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
