import React, { useEffect, useState } from "react";
import Card from "../components/CarList/templates/Card";
import { carsApi } from "../API";

export default function CarList() {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    const response = await carsApi.get();
    // console.log(response.data)
    setCars(response.data);
  };
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className='h-full w-full mt-8 px-36 flex flex-col gap-y-12'>
      {/* <div className="h-24 w-full z-50 bg-slate-600 flex flex-col justify-center items-center sticky top-0">
        Search
      </div> */}
      <div className='h-full w-full flex flex-wrap gap-y-8 items-center justify-center'>
        {cars.map((car, index) => {
          return <Card key={index} car={car} />;
        })}
      </div>
    </div>
  );
}
