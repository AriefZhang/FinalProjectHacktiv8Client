import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="w-2/12 min-h-screen shadow-xl bg-white flex flex-wrap items-center justify-between relative z-10 py-4 px-6 border-r">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-xl uppercase font-bold p-4 px-0"
            to="/"
          >
            Dealer's CMS
          </Link>
          {/* User */}
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap font-open-sans font-bold p-4 px-0"
                    to="/"
                  >
                    Dealer Dashboard
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className="text-blue-500 hover:text-blue-600 font-open-sans py-3 font-bold block"
                  to="/dealer/dashboard"
                >
                  <i className="fas fa-tv opacity-75 mr-2 text-sm"></i> Dashboard
                </Link>
              </li>


              <li className="items-center">
                <div className="divider"></div>
              </li>

              <li className="items-center">
                <Link
                  className="text-slate-700 hover:text-slate-500 font-open-sans py-3 font-bold block"
                  to="/dealer/dashboard/sell"
                >
                  <i className="fas fa-user-circle text-slate-400 mr-2 text-sm"></i> Sell A Car 
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
