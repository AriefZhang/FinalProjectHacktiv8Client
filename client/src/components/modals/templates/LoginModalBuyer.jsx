import React from "react";
import { useForm } from "react-hook-form";
import { buyerApi } from "../../../API";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginModalBuyer({ showModal, setShowModal }) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await buyerApi.post("/login", data);
      console.log(response.data);
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("role", "Buyer");
      Swal.fire({
        icon: "success",
        title: "Login",
        text: "Welcome!",
      });
      setShowModal(false);
      navigate("/cars");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div
              className="relative my-6 mx-auto w-11/12 max-w-xl h-fit font-encode bg-white text-slate-900"
              // onBlur={() => setShowModal(false)}
            >
              <button
                className="px-3 py-1 rounded-full absolute right-4 top-4 bg-slate-600 text-xl text-white font-encode"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
              <div className="w-full px-4 mt-8 flex flex-col justify-center items-center">
                <p className="text-2xl font-semibold">User Login</p>
                <form
                  className="w-full flex flex-col mt-12 px-16 pb-16"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <label
                    htmlFor="Email"
                    className="py-2 pl-4 text-md font-semibold font-encode"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
                    placeholder="john.doe@mail.com"
                    name="email"
                    {...register("email")}
                  />
                  <label
                    htmlFor="Email"
                    className="mt-4 py-2 pl-4 text-md font-semibold font-encode"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-8 py-4 text-md font-encode border border-slate-500 rounded-full"
                    placeholder="myVerySecretPassword"
                    name="password"
                    {...register("password")}
                  />
                  <button
                    type="submit"
                    className="mt-12 text-md font-encode font-normal text-white w-full rounded-full py-4 bg-blue-700"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
