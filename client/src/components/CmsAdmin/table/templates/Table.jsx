import React from "react";
import TableRow from "./organisms/TableRow";

export default function Table({ cars, fetchCars }) {
  return (
    <div className="overflow-x-auto px-4">
      <table className="w-full">
        <thead>
          <tr className="py-2 font-open-sans text-slate-900">
            <th className="py-2">Name</th>
            <th>Description</th>
            <th>Year</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Mileage</th>
            <th>Fuel</th>
            <th>Inspection</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => {
            return <TableRow key={index} car={car} fetchCars={fetchCars} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
