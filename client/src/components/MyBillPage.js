import { useEffect, useState } from "react";
import serverApi from "../API/serverApi";
import Swal from "sweetalert2";
import { priceFormatter } from "../helpers";

export default function MyBill() {
  const [boughtHistory, setBoughtHistory] = useState([]);
  const [boughtHistoryCash, setBoughtHistoryCash] = useState([]);
  const [showCash, setShowCash] = useState(true);
  const [showCredit, setShowCredit] = useState(false);

  const userId = localStorage.id;
  useEffect(() => {
    serverApi
      .get(`/payments/status?BuyerId=${userId}`, {
        headers: { access_token: localStorage.access_token },
      })
      .then((res) => {
        if (res.data.length) {
          res.data.map((el) => {
            el.saved_token_id === "CASH"
              ? setBoughtHistoryCash(res.data)
              : setBoughtHistory(res.data);
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
        Swal.fire({
          title: "Oops!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  }, []);

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-yD7_B8N68TSAEE2y";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const nextPayment = () => {
    let CarId;
    let unfinishedCredit = boughtHistory.find((el) => {
      return (
        el.currentInstallment > 0 &&
        el.currentInstallment <= el.totalInstallment
      );
    });

    console.log(unfinishedCredit);
    CarId = unfinishedCredit.CarId;

    serverApi
      .post(
        "/payments/credits/cars",
        {
          CarId,
        },
        {
          headers: { access_token: localStorage.access_token },
        }
      )
      .then((res) => {
        window.snap.pay(res.data.token, {
          onSuccess: function (result) {
            alert("payment success!");
            console.log(result);
            alert("you closed the popup without finishing the payment");
          },
        });
      })
      .catch((err) => {
        console.log(err.response, "err");
      });
  };

  const changeShowCash = () => {
    setShowCash(true);
    setShowCredit(false);
  };

  const changeShowCredit = () => {
    setShowCredit(true);
    setShowCash(false);
  };

  console.log(boughtHistoryCash);

  return (
    <>
      <div className='flex flex-col justify-center w-full bg-slate-100'>
        <ul
          className='nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 mx-24'
          id='tabs-tab'
          role='tablist'
        >
          <li className='nav-item' role='presentation'>
            <button
              onClick={changeShowCash}
              className='
              nav-link
              font-semibold
              text-lg
              text-gray-600
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              focus:border-transparent
              active
            '
              data-bs-toggle='pill'
              data-bs-target='#tabs-home'
              role='tab'
              aria-controls='tabs-home'
              aria-selected='true'
            >
              Cash
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              onClick={changeShowCredit}
              className='
              nav-link
              font-semibold
              text-lg
              text-gray-600
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              focus:border-transparent
            '
              id='tabs-profile-tab'
              data-bs-toggle='pill'
              data-bs-target='#tabs-profile'
              role='tab'
              aria-controls='tabs-profile'
              aria-selected='false'
            >
              Credit
            </button>
          </li>
        </ul>
        <div className='tab-content mx-24'>
          {showCash !== false ? (
            <>
              {boughtHistoryCash.length > 0 ? (
                boughtHistoryCash.map((el) => {
                  return (
                    <div
                      className='tab-pane fade show active'
                      role='tabpanel'
                      aria-labelledby='tabs-home-tab'
                    >
                      <div className='flex flex-col card bg-white shadow-lg m-5'>
                        <div className='card-body mx-20 '>
                          <h2 className='card-title font-bold text-gray-800 mb-5'>
                            {el.carName}
                          </h2>
                          <div className='flex flex-row justify-between w-full'>
                            <span className='font-semibold text-slate-500'>
                              Submission Time
                            </span>
                            <span className='font-bold text-slate-700'>
                              {el.boughtDate}
                            </span>
                          </div>
                          <div className='flex flex-row justify-between w-full'>
                            <span className='font-semibold text-slate-500'>
                              Total Price
                            </span>
                            <span className='font-bold text-slate-700'>
                              {priceFormatter(el.price)}
                            </span>
                          </div>
                          <div className='flex flex-row justify-between w-full'>
                            <span className='font-semibold text-slate-500'>
                              Status
                            </span>
                            {el.paidOff === true ? (
                              <span className='font-semibold bg-green-600 text-white rounded-md px-2'>
                                Already Paid
                              </span>
                            ) : (
                              <span className='font-semibold bg-red-600 text-white rounded-md px-2'>
                                Not Paid
                              </span>
                            )}
                          </div>
                          <div className='flex flex-row justify-between w-full'>
                            <span className='font-semibold text-slate-500'>
                              Order Id
                            </span>
                            <span className='font-bold text-slate-700'>
                              {el.orderId}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div
                  className='tab-pane fade show active'
                  role='tabpanel'
                  aria-labelledby='tabs-home-tab'
                >
                  <div className='flex flex-col card bg-white shadow-lg m-5 h-80'>
                    <div className='flex justify-center items-center card-body'>
                      <h1>You don't have a cash payment history yet</h1>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {!boughtHistory.length ? (
                <div
                  className='tab-pane fade show active'
                  role='tabpanel'
                  aria-labelledby='tabs-home-tab'
                >
                  <div class='flex flex-col card bg-white shadow-lg m-5 h-80'>
                    <div class='flex justify-center items-center card-body'>
                      <h1>You don't have a credit payment history yet</h1>
                    </div>
                  </div>
                </div>
              ) : (
                boughtHistory.map((el) => {
                  return el.installment === true ? (
                    <>
                      <div
                        class='tab-pane fade'
                        id='tabs-profile'
                        role='tabpanel'
                        aria-labelledby='tabs-profile-tab'
                      >
                        <div class='flex card bg-white shadow-lg m-5'>
                          <div class='card-body mx-20'>
                            <h2 className='card-title font-bold text-gray-800 mb-5'>
                              {el.carName}
                            </h2>
                            <div className='flex flex-row justify-between w-full'>
                              <span className='font-semibold text-slate-500'>
                                Submission Time
                              </span>
                              <span className='font-bold text-slate-700'>
                                {el.boughtDate}
                              </span>
                            </div>
                            <div className='flex flex-row justify-between w-full'>
                              <span className='font-semibold text-slate-500'>
                                Total Installment
                              </span>
                              <span className='font-bold text-slate-700'>
                                {el.totalInstallment}
                              </span>
                            </div>
                            <div className='flex flex-row justify-between w-full'>
                              <span className='font-semibold text-slate-500'>
                                Current Installment
                              </span>
                              <span className='font-bold text-slate-700'>
                                {el.currentInstallment}
                              </span>
                            </div>
                            <div className='flex flex-row justify-between w-full'>
                              <span className='font-semibold text-slate-500'>
                                Status
                              </span>
                              {el.paidOff === true ? (
                                <span className='font-semibold bg-green-600 text-white rounded-md px-2'>
                                  Already Paid
                                </span>
                              ) : (
                                <span className='font-semibold bg-red-600 text-white rounded-md px-2'>
                                  Not Paid
                                </span>
                              )}
                            </div>
                            <div className='flex flex-row justify-between w-full'>
                              <span className='font-semibold text-slate-500'>
                                Order Id
                              </span>
                              <span className='font-bold text-slate-700'>
                                {el.orderId}
                              </span>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div></div>
                  );
                })
              )}
              <div className='flex justify-end m-8'>
                <button onClick={() => nextPayment()} className='btn btn-sm'>
                  Next Payment
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
