import React from "react";
import Dropdown from "../organisms/Dropdown";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="w-full h-16 px-36 flex flex-row justify-between text-slate-900">
      <div className="w-1/4 h-full font-bold font-open-sans text-xl flex justify-start items-center">
        LOGO
      </div>
      <div className="w-1/2 h-full flex flex-row gap-x-8 justify-center items-center text-xl">
        <button className="h-full font-bold font-open-sans hover:border-b hover:border-orange-600"
        onClick={() => navigate("/")}>
          Home
        </button>
        <button className="h-full font-bold font-open-sans hover:border-b hover:border-orange-600"
        onClick={() => navigate("/cars")}>
          Browse Car
        </button>
        <button className="h-full font-bold font-open-sans hover:border-b hover:border-orange-600"
        onClick={() => navigate("/sell")}>
          Sell Car
        </button>
      </div>
      <div className="h-full w-1/4 flex flex-row gap-x-8 justify-end items-center text-xl">
        <Dropdown title="Login" />
        <Dropdown title="Register" />
      </div>
    </div>
  );
}
