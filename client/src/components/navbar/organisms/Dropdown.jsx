import React from "react";
import { useNavigate } from "react-router-dom";
import { createPopper } from "@popperjs/core";

export default function Dropdown({ title }) {
  // dropdown props
  const navigate = useNavigate();
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-slate-900 font-bold font-open-sans text-xl py-3 over:border-b hover:border-orange-600 outline-none focus:outline-none ease-linear transition-all duration-150"
              }
              type="button"
              ref={btnDropdownRef}
              onBlur={closeDropdownPopover}
              onMouseEnter={openDropdownPopover}
              onMouseLeave={closeDropdownPopover}
            >
              {title}
            </button>
            <div
              onMouseEnter={() => openDropdownPopover()}
              onMouseLeave={() => closeDropdownPopover()}
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-white " +
                "font-open-sans text-lg z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <button
                className={
                  "text-lg py-4 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  "text-blueGray-700 hover:bg-yellow-100"
                }
                onClick={() => navigate(`/${title.toLowerCase()}/user`)}
              >
                {title}
              </button>
              <button
                href="#pablo"
                className={
                  "text-lg py-4 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  "text-blueGray-700 hover:bg-yellow-100"
                }
                onClick={() => navigate(`/${title.toLowerCase()}/dealer`)}
              >
                {`${title} as dealer`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function DropdownRender() {
//   return (
//     <>
//       <Dropdown title="Register"/>
//     </>
//   );
// }
