import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { dealerApi } from "../../../API";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../helpers/customHook"
import Swal from "sweetalert2"

export default function RegisterModal() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [classModal, setModal] = useState("modal");
  const [login, setLogin] = useState("false")
  const [access_token, setToken] = useLocalStorage("access_token", "")

  useEffect(() => {
    if (!access_token) {
      setModal("modal");
    } else {
      setModal("modal hidden");
    }
  }, [access_token]);

  const onLogin = async (data) => {
    try {
      console.log(data);
      const response = await dealerApi.post("/login", data);
      console.log(response.data);
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("username", response.data.name);
      // setModal("m");
      navigate("/dashboard/dealer");
    } catch (error) {
      console.log(error);
    }
  };

  const onRegister = async (data) => {
    try {
      console.log(data);
      const response = await dealerApi.post("/login", data);
      console.log(response.data);
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("username", response.data.name);
      // setModal("m");
      navigate("/dashboard/dealer");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="checkbox" id="register-modal" className="modal-toggle" />
      <div className={classModal}>
        <div className="modal-box w-11/12 max-w-3xl h-fit bg-white text-slate-900">
          <label
            for="register-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="w-full px-4 mt-8 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold">Register</p>
            <form
              className="w-full flex flex-col mt-12 px-16 pb-16"
              onSubmit={handleSubmit(onLogin)}
            >
              <label
                htmlFor="Name"
                className="py-2 pl-4 text-xl font-bold font-encode"
              >
                Name
              </label>
              <input
                type="text"
                className="w-full px-8 py-4 font-encode border border-slate-500 rounded-full"
                placeholder="John Doe"
                name="Name"
                {...register("Name")}
              />

              <label
                htmlFor="Email"
                className="mt-6 py-2 pl-4 text-xl font-bold font-encode"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full px-8 py-4 font-encode border border-slate-500 rounded-full"
                placeholder="john.doe@mail.com"
                name="Email"
                {...register("Email")}
              />
              
              <label
                htmlFor="phoneNumber"
                className="mt-6 py-2 pl-4 text-xl font-bold font-encode"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="w-full px-8 py-4 font-encode border border-slate-500 rounded-full"
                placeholder="085155332233"
                name="phoneNumber"
                {...register("phoneNumber")}
              />

              <label
                htmlFor="storeName"
                className="mt-6 py-2 pl-4 text-xl font-bold font-encode"
              >
                storeName
              </label>
              <input
                type="text"
                className="w-full px-8 py-4 font-encode border border-slate-500 rounded-full"
                placeholder="myVerySecretPassword"
                name="John Classic Shop"
                {...register("storeName")}
              />

              <label
                htmlFor="storeAddres"
                className="mt-6 py-2 pl-4 text-xl font-bold font-encode"
              >
                Store Addres
              </label>
              <input
                type="password"
                className="w-full px-8 py-4 font-encode border border-slate-500 rounded-full"
                placeholder="myVerySecretPassword"
                name="storeAddres"
                {...register("storeAddres")}
              />

              <label
                htmlFor="password"
                className="mt-6 py-2 pl-4 text-xl font-bold font-encode"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-8 py-4 font-encode border border-slate-500 rounded-full"
                placeholder="myVerySecretPassword"
                name="password"
                {...register("password")}
              />
              <button
                type="submit"
                className="mt-12 text-lg font-encode font-bold text-white w-full rounded-full py-4 bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
