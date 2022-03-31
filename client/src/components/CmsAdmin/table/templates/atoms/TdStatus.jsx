import React from "react";

export default function TdStatus({ data }) {
  if (data) {
    return (
      <td className="font-roboto px-2 py-2 justify-center items-center">
        <div className="py-2 px-4 h-full w-full self-center rounded-full bg-green-600 text-white text-center font-bold hover:ring-2 hover:ring-green-600 ease-linear transition-all duration-150 cursor-default">
          Approved
        </div>
      </td>
    );
  } else {
    return (
      <td className="font-roboto px-2 py-2 justify-center items-center">
        <div className="py-2 px-4 h-full w-full self-center rounded-full bg-blue-700 self-center text-white text-center font-bold hover:ring-2 hover:ring-blue-700 ease-linear transition-all duration-150 cursor-default">
          On Progress
        </div>
      </td>
    );
  }
}
