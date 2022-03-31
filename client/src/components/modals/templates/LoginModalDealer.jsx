import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { dealerApi } from "../../../API";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// export default function LoginModal() {
//   const navigate = useNavigate();
//   const { register, handleSubmit } = useForm();
//   const [classModal, setModal] = useState("modal");
//   const [access_token, setToken] = useLocalStorage("access_token", "");

//   useEffect(() => {
//     if (!access_token) {
//       setModal("modal");
//     } else {
//       setModal("modal hidden");
//     }
//   }, [access_token]);

//   const onSubmit = async (data) => {
//     try {
//       console.log(data);
//       const response = await dealerApi.post("/login", data);
//       console.log(response.data);
//       localStorage.setItem("access_token", response.data.access_token);
//       localStorage.setItem("id", response.data.id);
//       localStorage.setItem("email", response.data.email);
//       localStorage.setItem("username", response.data.name);
//       Swal.fire({
//         icon: "success",
//         title: "Login",
//         text: "Welcome!",
//       });
//       navigate("/dashboard/dealer");
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: error.response.data.message,
//       })
//     }
//   };

//   return (
//     <div>
//       <input type="checkbox" id="login-modal" className="modal-toggle" />
//       <div className={classModal}>
//         <div className="modal-box w-11/12 max-w-3xl h-fit bg-white text-slate-900">
//           <label
//             for="login-modal"
//             className="btn btn-sm btn-circle absolute right-2 top-2"
//           >
//             ✕
//           </label>
//           <div className="w-full px-4 mt-8 flex flex-col justify-center items-center">
//             <p className="text-4xl font-bold">Dealer Login</p>
//             <form
//               className="w-full flex flex-col mt-12 px-16 pb-16"
//               onSubmit={handleSubmit(onSubmit)}
//             >
//               <label
//                 htmlFor="Email"
//                 className="py-2 pl-4 text-xl font-bold font-encode"
//               >
//                 Email
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-8 py-4 font-encode border border-slate-500 rounded-full"
//                 placeholder="john.doe@mail.com"
//                 name="email"
//                 {...register("email")}
//               />
//               <label
//                 htmlFor="Email"
//                 className="mt-6 py-2 pl-4 text-xl font-bold font-encode"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="w-full px-8 py-4 font-encode border border-slate-500 rounded-full"
//                 placeholder="myVerySecretPassword"
//                 name="password"
//                 {...register("password")}
//               />
//               <button
//                 type="submit"
//                 className="mt-12 text-lg font-encode font-bold text-white w-full rounded-full py-4 bg-blue-700"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function LoginModalDealer({ showModal, setShowModal }) {
  // const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await dealerApi.post("/login", data);
      console.log(response.data);
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("username", response.data.name);
      localStorage.setItem("role", "Dealer");
      Swal.fire({
        icon: "success",
        title: "Login",
        text: "Welcome!",
      });
      setShowModal(false);
      navigate("/dealer/dashboard");
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
              className="relative my-6 mx-auto w-11/12 max-w-xl h-fit bg-white text-slate-900"
              // onBlur={setShowModal(false)}
            >
              <button
                className="px-3 py-1 rounded-full absolute right-4 top-4 bg-slate-600 text-xl text-white font-encode"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
              <div className="w-full px-4 mt-8 flex flex-col justify-center items-center">
                <p className="text-2xl font-semibold">Dealer Login</p>
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
