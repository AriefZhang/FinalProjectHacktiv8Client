import React from "react";

export default function TdAction({ data }) {
  return <td className="w-full text-center font-roboto py-4 px-2 flex flex-col justify-center items-center gap-y-2">
    <button className="w-24 py-2 bg-blue-500 text-white rounded-lg">Edit</button>
    <button className="w-24 py-2 bg-red-500 text-white rounded-lg">Delete</button>
  </td>;
}
