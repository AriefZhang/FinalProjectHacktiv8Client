import React, { useState, useEffect } from "react";
// import Carousel from "../organisms/Carousel";
import { priceFormatter, mileageFormatter, yearFormatter } from "../../../helpers";

export default function Card({ car }) {
  const [index, setIndex] = useState(0);
  const [curImage, setCurImage] = useState("");

  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    console.log(offsetHeight, offsetWidth);
  };

  useEffect(() => {
    setCurImage(car.Images[0].image);
    // console.log(curImage)
  }, []);

  return (
    <div className="w-80 mx-8 overflow-hidden bg-white rounded-xl shadow-lg border">
      {/* <Carousel /> */}
      <div className="h-56 w-full overflow-hidden flex justify-center items-center">
        <img onLoad={onImgLoad} src={curImage} alt={car.name} className="object-cover h-full self-center rounded"/>
      </div>
      <div className="flex flex-col gap-y-2 px-3 pt-3 bg-white">
        <h1 className="mx-3 text-lg font-open-sans font-bold text-red-900">
          {priceFormatter(car.price)}
        </h1>
        <h1 className="mx-3 text-lg font-open-sans font-bold text-slate-900">
          {car.name}
        </h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-sm font-open-sans text-slate-500">
          {`${mileageFormatter(car.mileage)} | ${car.fuel} | Automatic | Jakarta Utara`}
        </h1>
        <p className="py-2 text-sm text-gray-700 text-justify">
          {`${car.description.substring(0, 250)}...`}
        </p>
        <div className="mt-2 h-12 w-full flex flex-row font-open-sans text-slate-900 text-sm">
          <button className="w-1/3 h-full border-r hover:bg-slate-100 hover:font-bold hover:text-md">
            Preview
          </button>
          <button className="w-1/3 h-full border-r hover:bg-slate-100 hover:font-bold hover:text-md">
            See Detail
          </button>
          <button className="w-1/3 h-full hover:bg-slate-100 hover:font-bold hover:text-md">
            Like
          </button>
        </div>
      </div>
    </div>
  );
}
