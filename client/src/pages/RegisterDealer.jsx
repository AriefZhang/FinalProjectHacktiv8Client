import React from "react";
import { useForm } from "react-hook-form";
import { dealerApi } from "../API";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function RegisterDealer({ setLoginDealer }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await dealerApi.post("/register", data);
      Swal.fire({
        icon: "success",
        title: "Login",
        text: "Welcome!",
      });
      setLoginDealer(true);
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  return (
    <div class="bg-white">
      <div class="flex justify-center h-screen">
        <div
          class="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage: `url(
              "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2021/04_14_miura/miura_cover.jpg"
            )`,
            backgroundPositionX: "-35rem"
          }}
        >
          <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 class="text-4xl font-bold font-encode text-white">
                Auto Classic
              </h2>

              <p class="max-w-xl mt-3 text-gray-300">
                Classic cars all in one place
              </p>
            </div>
          </div>
        </div>

        <div class="flex w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div class="flex-1">
            <div class="text-center mt-16">
              <h2 class="text-4xl font-bold text-center text-slate-900">
                Dealer
              </h2>

              <p class="mt-3 text-gray-500">Register Account</p>
            </div>

            <div class="mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("name")}
                  />
                </div>

                <div className="mt-6">
                  <label for="email" class="block mb-2 text-sm text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("email")}
                  />
                </div>

                <div className="mt-6">
                  <label for="storeName" class="block mb-2 text-sm text-gray-600">
                    Store Name
                  </label>
                  <input
                    type="text"
                    name="storeName"
                    id="storeName"
                    placeholder="Southwest Auto"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("storeName")}
                  />
                </div>

                <div className="mt-6">
                  <label for="storeAddress" class="block mb-2 text-sm text-gray-600">
                    Store City Address
                  </label>
                  <input
                    type="text"
                    name="storeAddress"
                    id="storeAddress"
                    placeholder="Jakarta Pusat"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("storeAddress")}
                  />
                </div>

                <div className="mt-6">
                  <label
                    for="phoneNumber"
                    class="block mb-2 text-sm text-gray-600"
                  >
                    Store Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="081231231231"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("phoneNumber")}
                  />
                </div>

                <div className="mt-6">
                  <div class="flex justify-between mb-2">
                    <label for="password" class="text-sm text-gray-600">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("password")}
                  />
                </div>

                <div class="mt-6">
                  <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign up
                  </button>
                </div>
              </form>

              <p class="mt-6 text-sm text-center text-gray-400">
                Already have account?{" "}
                <button
                  class="text-blue-500 focus:outline-none focus:underline hover:underline"
                  onClick={() => {
                    setLoginDealer(true);
                    navigate("/");
                  }}
                >
                  Sign up
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
