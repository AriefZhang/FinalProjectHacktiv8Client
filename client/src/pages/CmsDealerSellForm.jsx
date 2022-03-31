import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { brandApi, carsApi } from "../API";
import Swal from "sweetalert2";
import { IKContext, IKUpload } from "imagekitio-react";
import { ORIGIN } from "../API";

const labelClass = "text-xl font-bold font-encode text-slate-900 px-2";
const inputClass =
  "block text-lg text-slate-900 font-encode w-full px-4 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500";
const selectClass =
  "select select-bordered w-full block text-lg text-slate-900 font-encode font-normal w-full px-4 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500";
const textAreaClass =
  "textarea w-full block text-lg text-slate-900 font-encode font-normal w-full px-4 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500";

export default function CmsDealerSellForm() {
  const publicKey = "public_BACW09RMefisOpJUrHcxl/9Id9g=";
  const urlEndpoint = "https://ik.imagekit.io/iqpgx3omg7kg";
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [imageField, setImageField] = useState(1);
  const [uploadedImageSource, setUploadedImageSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const watchBrand = watch("brand", null);

  const fetchBrands = async () => {
    try {
      // console.log("masuk")
      const response = await brandApi.get();
      setBrands(response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed fetching brands data!",
      });
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(() => {
    // console.log(watchBrand, brands);
    if (watchBrand) {
      const find = brands.find((el) => el.id === +watchBrand);
      // console.log(find.Types);
      setTypes(find.Types);
    }
  }, [watchBrand]);

  const onSubmit = async (data) => {
    try {
      setShowError(true);
      setIsLoading(true);
      data.yearMade = `${data.yearMade}-01-01`;
      data.image = uploadedImageSource;
      const accessToken = localStorage.getItem("access_token");
      await carsApi.post("/", data, {
        headers: {
          access_token: accessToken,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Sell a Car",
        text: "Success add car",
      });
      reset();
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
      setIsLoading(false);
    }
  };

  const onSuccess = (res) => {
    console.log("Success");
    console.log(res.url);
    setUploadedImageSource([...uploadedImageSource, res.url]);
    console.log(uploadedImageSource);
  };

  const onError = (err) => {
    console.log("Error");
    console.log(err);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-100 items-center p-8">
      <div className="w-full h-full bg-white flex flex-col px-48 rounded-xl drop-shadow-2xl">
        <div className="h-36 w-full py-8 mt-4 text-4xl font-bold font-encode text-slate-900">
          Sell a Car
        </div>
        <div className="w-full flex flex-col -mt-8">
          <form
            className="w-full flex flex-col gap-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full grid grid-cols-2 gap-x-16 gap-y-8">
              <div className="w-full flex flex-col gap-y-2">
                <label className={labelClass}>Name</label>
                <input
                  type="text"
                  placeholder="Input car name here"
                  {...register("name", { required: "Name is required" })}
                  className={inputClass}
                />
                {errors.name && (
                  <p className="pl-2 text-red-600 font-semibold">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-y-2">
                <label className={labelClass}>Color</label>
                <input
                  type="text"
                  {...register("color", { required: "Color is required" })}
                  className={inputClass}
                  placeholder="Black, Red, Green, Blue Metalic, others?"
                />
                {errors.color && (
                  <p className="pl-2 text-red-600 font-semibold">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
                    {errors.color.message}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-y-2">
                <label className={labelClass}>Brand</label>
                <select
                  {...register("brand", { required: "Brand is required" })}
                  className={selectClass}
                  defaultValue=""
                >
                  <option value="" selected disabled hidden>
                    Select car brand
                  </option>
                  {brands.map((el) => {
                    return (
                      <option key={el.id} value={el.id}>
                        {el.name}
                      </option>
                    );
                  })}
                </select>
                {errors.brand && (
                  <p className="pl-2 text-red-600 font-semibold">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
                    {errors.brand.message}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-y-2">
                <label className={labelClass}>Model</label>
                {!types ? (
                  <select
                    disabled
                    {...register("type", { required: "Model is required" })}
                    className={selectClass}
                    defaultValue=""
                  >
                    <option value="" selected disabled hidden>
                      Select car model
                    </option>
                  </select>
                ) : (
                  <select
                    {...register("TypeId", { required: "Model is required" })}
                    className={selectClass}
                    defaultValue=""
                  >
                    <option value="" selected disabled hidden>
                      Select car model
                    </option>
                    {types.map((el) => {
                      return (
                        <option key={el.id} value={el.id}>
                          {el.modelName}
                        </option>
                      );
                    })}
                  </select>
                )}
                {errors.TypeId && (
                  <p className="pl-2 text-red-600 font-semibold">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
                    {errors.TypeId.message}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-y-2">
                <label className={labelClass}>Fuel</label>
                <select
                  {...register("fuel", { required: "Fuel type is required" })}
                  className={selectClass}
                  defaultValue=""
                >
                  <option value="" selected disabled hidden>
                    Select fuel type
                  </option>
                  <option value="Gasoline">Gasoline</option>
                  <option value="Diesel">Diesel</option>
                </select>
                {errors.fuel && (
                  <p className="pl-2 text-red-600 font-semibold">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
                    {errors.fuel.message}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-y-2">
                <label className={labelClass}>Number of Seat</label>
                <select
                  {...register("seats", {
                    required: "Number of seat is required",
                  })}
                  className={selectClass}
                  defaultValue=""
                >
                  <option value="" selected disabled hidden>
                    Select seats number
                  </option>
                  {Array.from(Array(10).keys()).map((el) => {
                    return (
                      <option key={el} value={el + 1}>
                        {el + 1}
                      </option>
                    );
                  })}
                </select>
                {errors.seats && (
                  <p className="pl-2 text-red-600 font-semibold">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
                    {errors.seats.message}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-y-2">
                <label className={labelClass}>Year</label>
                <input
                  type="number"
                  {...register("yearMade", {
                    required: "Year made is required",
                    min: { value: 1800, message: "Minimum year is 1800" },
                    max: { value: 2010, message: "Maximum year is 2010" },
                  })}
                  placeholder="Enter year between 1800 and 2010"
                  className={inputClass}
                />
                {errors.yearMade && (
                  <p className="pl-2 text-red-600 font-semibold">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
                    {errors.yearMade.message}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-y-2">
                <label htmlFor="mileage" className={labelClass}>
                  Mileage
                </label>
                <div className="w-full flex flex-col">
                  <input
                    id="mileage"
                    type="number"
                    placeholder="Input number only in kilometer"
                    {...register("mileage", {
                      required: "Mileage is required",
                    })}
                    className={inputClass}
                  />
                  {errors.mileage && (
                    <p className="pl-2 text-red-600 font-semibold">
                      <i class="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
                      {errors.mileage.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-2">
              <label htmlFor="price" className={labelClass}>
                Price
              </label>
              <div className="w-full flex flex-col">
                <input
                  id="price"
                  type="number"
                  placeholder="Input number only in rupiah (IDR)"
                  {...register("price", {
                    required: "Price is required",
                  })}
                  className={inputClass}
                />
                {errors.price && (
                  <p className="pl-2 text-red-600 font-semibold">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
                    {errors.price.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-2">
              <label htmlFor="image" className={labelClass}>
                Image
              </label>
              <div className="w-full flex flex-row">
                <div className={inputClass}>
                  <IKContext
                    publicKey={publicKey}
                    urlEndpoint={urlEndpoint}
                    authenticationEndpoint={`${ORIGIN}/auth`}
                  >
                    <div className="w-full flex flex-col gap-y-2">
                      {Array.from(Array(imageField + 1).keys())
                        .filter((el) => el > 0)
                        .map((el) => {
                          return (
                            <IKUpload
                              className="file:mr-4 file:py-2 file:px-4
                            file:rounded-lg file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100"
                              key={el}
                              useUniqueFileName={true}
                              folder={"/cars"}
                              onError={onError}
                              onSuccess={onSuccess}
                            />
                          );
                        })}
                    </div>
                  </IKContext>
                  {imageField < 10 ? (
                    <button
                      className="w-full py-2 pt-3 text-left text-blue-700 hover:text-blue-500 font-bold font-encode"
                      onClick={() => setImageField(imageField + 1)}
                    >
                      <i class="fa-solid fa-plus"></i>
                      Add image
                    </button>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-2">
              <label className={labelClass}>Description</label>
              <textarea
                rows={5}
                cols={50}
                placeholder="Specify your car here"
                {...register("description", {
                  required: "Description is required",
                })}
                className={textAreaClass}
              />
              {errors.description && (
                <p className="pl-2 text-red-600 font-semibold">
                  <i class="fa-solid fa-triangle-exclamation mr-1"></i>{" "}
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="pb-16 w-full flex justify-end">
              {isLoading ? (
                <div className="w-1/4 py-2 text-white font-bold font-encode bg-blue-700 rounded-xl cursor-wait flex justify-center items-center">
                  <i class="fa-solid fa-spinner animate-spin mr-2"></i>
                  Submit
                </div>
              ) : (
                <button className="w-1/4 py-2 text-white font-bold font-encode bg-blue-700 rounded-xl">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
