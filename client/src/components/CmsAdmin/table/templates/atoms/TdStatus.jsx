import React from "react";

export default function TdStatus({ data }) {
  if (data) {
    return (
      <td className="w-64 font-roboto px-2 py-2 justify-center items-center">
        <div className="py-2 h-full w-36 rounded-full bg-green-500 text-white text-center font-bold">
          Approved
        </div>
      </td>
    );
  } else {
    return (
      <td className="font-roboto px-2 py-2 justify-center items-center">
        <div className="py-2 h-full w-full self-center rounded-full bg-blue-500 text-white text-center font-bold">
          On Progress
        </div>
      </td>
    );
  }
}
