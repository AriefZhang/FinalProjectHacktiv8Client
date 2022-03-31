import React from "react";
import { useNavigate } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import Swal from "sweetalert2";

export default function DropdownProfile() {
  // dropdown props
  const navigate = useNavigate();
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const signOutHandler = () => {
    localStorage.clear();
    Swal.fire({
      icon: "success",
      title: "Logout",
      text: "See you again!",
    });
    navigate("/");
  };
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-slate-900 font-bold font-encode text-xl py-2 px-4 rounded-full hover:ring-2 hover:ring-sky-500 hover:border-b hover:border-orange-600 outline-none focus:outline-none ease-linear transition-all duration-150 bg-slate-300"
              }
              type="button"
              ref={btnDropdownRef}
              onBlur={closeDropdownPopover}
              onMouseEnter={openDropdownPopover}
              onMouseLeave={closeDropdownPopover}
            >
              <i class="fa-solid fa-user text-slate-900"></i>
            </button>
            <div
              onMouseEnter={() => openDropdownPopover()}
              onMouseLeave={() => closeDropdownPopover()}
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-white " +
                "font-encode text-lg z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <p
                className={
                  "text-md text-left py-4 px-4 font-semibold block w-full whitespace-nowrap bg-transparent " +
                  "text-blueGray-700"
                }
              >
                {`Hello, ${username}`}
              </p>
              <p
                className={
                  "text-sm -mt-2 text-slate-600 text-left px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  "text-blueGray-700"
                }
              >
                {role}
              </p>
              {role === "Dealer" ? (
                <>
                  {" "}
                  <div className="divider"></div>
                  <button
                    className={
                      "text-sm text-left py-4 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                      "text-blueGray-700 hover:bg-yellow-100"
                    }
                    onClick={() => navigate("/dealer/dashboard")}
                  >
                    <i class="fa-solid fa-table-columns mr-2"></i>
                    {`Dashboard`}
                  </button>{" "}
                </>
              ) : null}

              <div className="divider"></div>
              <button
                className={
                  "text-sm text-left py-4 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  "text-blueGray-700 hover:bg-yellow-100"
                }
                onClick={signOutHandler}
              >
                <i className="fa-solid fa-right-from-bracket mr-2"></i>
                {`Sign Out`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
