import React, { useEffect, useState } from "react";
import Card from "../components/CarList/templates/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { carsApi } from "../API";
import { useSearchParams } from "react-router-dom";

export default function CarList() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalItem, setTotalItem] = useState();
  const [hasMore, setHasMore] = useState(true);
  let [searchParams, setSearchParams] = useSearchParams();
  let brandQuery = searchParams.get("brand")?.toLowerCase();

  const fetchCars = async () => {
    const data = await carsApi.get();
    const response = await carsApi.get(`?page=${page}`);
    // console.log(response.data);
    setTotalItem(data.data.rows.length);
    setIsLoading(false);
    if (cars.length === totalItem) {
      setHasMore(false);
    }
    if (brandQuery) {
      let cars = response.data.rows.filter((car) => {
        return car.Type.Brand.name.toLowerCase() === brandQuery;
      });
      // console.log(cars);
      setCars(cars);
    } else {
      // console.log(response.data.rows);
      setCars(cars.concat(response.data.rows));
    }
  };
  useEffect(() => {
    fetchCars();
  }, [brandQuery]);

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    fetchCars();
  }, [page]);

  const fetchMorePage = () => {
    console.log(cars.length, totalItem);
    setPage(page + 1);
    console.log(page, ">>>>>");
  };

  return (
    <div className="h-full w-full mt-8 px-48 flex flex-col gap-y-12">
      <div className="h-full w-full flex flex-wrap gap-y-8 items-center justify-center">
        {isLoading ? (
          Array.from(Array(15).keys()).map((el) => {
            return (
              <div className="w-80 h-96 mx-8 overflow-hidden bg-white rounded-xl shadow-lg border ease-in-out transition-all duration-50 cursor-default">
                <div className="h-48 w-full overflow-hidden bg-slate-400 animate-pulse flex justify-center items-center"></div>
                <div className="mt-4 py-2 px-4 w-full h-12">
                  <div className="rounded-full w-full h-full bg-slate-400 animate-pulse"></div>
                </div>
                <div className="h-12 w-full py-2 px-4 grid grid-cols-2 gap-x-2">
                  <div className="w-full h-full rounded-full bg-slate-400 animate-pulse"></div>
                  <div className="w-full h-full rounded-full bg-slate-400 animate-pulse"></div>
                </div>
                <div className="mt-4 h-12 w-full flex justify-end py-2 px-4">
                  <div className="w-1/2 h-full rounded-lg bg-slate-400 animate-pulse"></div>
                </div>
              </div>
            );
          })
        ) : (
          <InfiniteScroll
            dataLength={cars.length}
            className="h-full w-full flex flex-wrap gap-y-8 items-center justify-center"
            next={fetchMorePage}
            hasMore={hasMore}
            loader={
              <h4 className="w-full flex flex-col justify-center items-center">
                Loading...
              </h4>
            }
            endMessage={
              <>
                <p className="w-full mt-8 text-center text-slate-900 font-encode">
                  <b>Yay! You have seen it all</b>
                </p>
              </>
            }
          >
            {cars.map((car, index) => {
              return <Card key={index} car={car} />;
            })}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}
