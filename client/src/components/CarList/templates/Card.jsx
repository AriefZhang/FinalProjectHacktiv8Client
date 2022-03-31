import React, { useState, useEffect } from "react";
// import Carousel from "../organisms/Carousel";
import {
  priceFormatter,
  mileageFormatter,
  yearFormatter,
} from "../../../helpers";
import { useNavigate } from "react-router";

export default function Card({ car }) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [curImage, setCurImage] = useState("");
  const [readMore, setReadMore] = useState(false);

  // const onImgLoad = ({ target: img }) => {
  //   const { offsetHeight, offsetWidth } = img;
  //   // console.log(offsetHeight, offsetWidth);
  // };

  useEffect(() => {
    setCurImage(car.Images[0].image);
    // console.log(curImage)
  }, []);

  useEffect(() => {
    setCurImage(car.Images[index].image);
  }, [index]);

  const seeDetail = (carId) => {
    navigate("/detail/" + carId);
  };

  const nextImage = () => {
    index === car.Images.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const previousImage = () => {
    index === 0 ? setIndex(car.Images.length - 1) : setIndex(index - 1);
  };

  return (
    <div 
    className={(car.status === "sale" || !car.status) ? "w-80 mx-8 overflow-hidden bg-white rounded-xl shadow-lg border hover:shadow-2xl hover:scale-110 ease-in-out transition-all duration-500 cursor-default relative" : "w-80 mx-8 overflow-hidden bg-gray-200 rounded-xl shadow-lg border hover:shadow-2xl hover:scale-110 ease-in-out transition-all duration-500 cursor-default relative"}>
      {car.passedInspection && (
        <div className="px-4 py-2 bg-amber-500 absolute top-0 right-0 rounded-bl-lg font-encode text-white text-sm">
          <i class="fa-solid fa-clipboard-check mr-2"></i>
          Passed Inspection
        </div>
      )}

      <div className="px-4 py-2 bg-black opacity-70 absolute top-0 left-0 rounded-br-lg font-encode text-white text-sm">
        <i class="fa-solid fa-camera mr-2"></i>
        {car.Images.length}
      </div>

      {car.status === "sold" ? <div className="absolute top-0 z-50 bg-black opacity-70 h-56 w-full overflow-hidden flex justify-center items-center text-center text-4xl font-bold font-encode">Sold</div> : null}

      <button
        className="w-8 h-8 rounded-full bg-slate-900 opacity-50 absolute top-28 left-2 flex justify-center items-center text-white hover:scale-105"
        onClick={previousImage}
      >
        <i class="fa-solid fa-angle-left"></i>
      </button>

      <button
        className="w-8 h-8 rounded-full bg-slate-900 opacity-50 absolute top-28 right-2 flex justify-center items-center text-white hover:scale-105"
        onClick={nextImage}
      >
        <i class="fa-solid fa-angle-right"></i>
      </button>
      
      <div className="h-56 w-full overflow-hidden flex justify-center items-center">
        <img
          // onLoad={onImgLoad}
          src={curImage}
          alt={car.name}
          className="object-cover h-full self-center rounded"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png";
          }}
        />
      </div>
      <div className="flex flex-col gap-y-2 px-3 pt-3">
        <h1 className="mx-3 text-lg font-open-sans font-bold text-slate-900">
          {car.name}
        </h1>
      </div>

      <div className="px-6 pt-4 w-full grid grid-cols-2 gap-x-6 gap-y-2">
        <p className="text-slate-500 text-sm font-encode">
          <i class="fa-solid fa-gauge mr-2"></i>
          {"  "}
          {`${mileageFormatter(car.mileage)}`}
        </p>
        <p className="text-slate-500 text-sm font-encode">
          <i class="fa-solid fa-gas-pump mr-2"></i>
          {"  "}
          {car.fuel}
        </p>
        <p className="text-slate-500 text-sm font-encode">
          <i class="fa-solid fa-palette mr-2"></i>
          {"  "}
          {car.color}
        </p>
        <p className="text-slate-500 text-sm font-encode">
          <i class="fa-solid fa-location-dot mr-2"></i>
          {"  "}
          {car.DealerId ? car.Dealer.storeAddress : "Jakarta Pusat"}
        </p>
      </div>

      <div className="px-6 py-4">
        <p className="py-2 text-sm text-gray-700 text-justify font-encode">
          {car.description.length > 100 && !readMore
            ? `${car.description.substring(0, 100)}...`
            : car.description}
        </p>
        {car.description.length > 100 ? (
          <button
            className="font-encode"
            onClick={() => (readMore ? setReadMore(false) : setReadMore(true))}
          >
            {readMore ? "read less" : "read more"}
          </button>
        ) : null}

        <div className="mt-2 h-12 w-full flex flex-row font-encode text-slate-900 text-lg ">
          <div className="w-1/2 h-full flex flex-col justify-center font-bold">
            {priceFormatter(car.price).split(",")[0]}
          </div>
          {car.status === "sale" || !car.status ? (
            <button
              onClick={() => seeDetail(car.id)}
              className="w-1/3 py-2 absolute bottom-5 right-5 rounded-lg bg-blue-700 hover:scale-105 text-white text-sm font-encode ease-linear transition-all duration-150"
            >
              See Detail
              <i class="fa-solid fa-angle-right ml-2"></i>
            </button>
          ) : (
            <button className="w-1/3 py-2 absolute bottom-5 right-5 rounded-lg bg-slate-700 hover:scale-105 text-white text-sm font-encode ease-linear transition-all duration-150">
              sold
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
