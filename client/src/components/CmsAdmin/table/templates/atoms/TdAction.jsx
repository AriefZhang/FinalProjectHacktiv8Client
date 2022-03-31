import React from "react";
import Swal from "sweetalert2";
import { carsApi } from "../../../../../API";

export default function TdAction({ data, fetchCars }) {
  const deleteHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          await carsApi.delete(`${data}`, {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          });
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          fetchCars()
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    });
  };
  return (
    <td className="w-full text-center font-roboto py-4 px-2 flex flex-col justify-center items-center gap-y-2">
      <button
        className="w-24 py-2 bg-red-500 text-white rounded-lg"
        onClick={deleteHandler}
      >
        Delete
      </button>
    </td>
  );
}
