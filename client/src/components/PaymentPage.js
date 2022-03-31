import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { apiClient } from "../API/midtrans"
import serverApi from '../API/serverApi'
import Swal from "sweetalert2";

export default function PaymentPage() {
  const [carDetail, setCarDetail] = useState({});

  const [quantity, setQuantity] = useState(1);
  const [buyerId, setBuyerId] = useState(1);
  const [notes, setNotes] = useState("");

  const [term, setTerm] = useState(3)
  const [dp, setDp] = useState(0)

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const { carId } = useParams();

  const changeNote = (event) => {
    setNotes(event.target.value);
  };

  const changePaymentMethod = (event) => {
    // console.log(event.target.value);
    setPaymentMethod(event.target.value);
  };

  const changeTerm = (event) => {
    setTerm(event.target.value)
  }

  const changeDp = (event) => {
    setDp(event.target.value)
  }


  useEffect(() => {
    serverApi
      .get(`/cars/${carId}`)
      .then((res) => {
        setCarDetail(res.data);
      })
      .catch((err) => console.log(err));
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

  const submitPaymentCash = () => {
    serverApi.post('/payments', {
      quantity,
      carId,
      notes
    }, {
      headers: {access_token: localStorage.access_token}
    })
    .then(res => {
      window.snap.pay(res.data.token, {
        onSuccess: function(result){
          alert("payment success!"); console.log(result);
          apiClient.transaction.status('59c22bce-b428-472c-a52e-8b33677cda85')
            .then((resp) => {
              alert("you closed the popup without finishing the payment");     
            })
        }
      })
      .catch((err) => console.log(err));
    })
  };

  const submitPaymentCredit = () => {
    const payload = {
      term,
      dp
    }

    serverApi.post(`/payments/credits/${carId}`, payload, {
      headers: {access_token: localStorage.access_token}
    })
      .then(res => {
        console.log(res.data);
        // window.location.replace(res.data.paymentUrl);
        window.snap.pay(res.data.token, {
          onSuccess: function(result){
            Swal.fire({
              title: 'Goods!',
              text: 'Payment succesfull!',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          }
        })
      })
      .catch(err => console.log(err.response))

  }

  return (
    <>
      <h1 className='flex justify-center font-bold text-xl my-3'>
        Payment Page
      </h1>
      <div className='flex flex-row justify-center mx-32'>
        <div className='w-2/6 my-4'>
          <select
            className='select select-bordered w-full'
            onChange={changePaymentMethod}
            value={paymentMethod}
            defaultValue={paymentMethod}
          >
            <option value='cash'>Cash</option>
            <option value='credit'>Credit</option>
          </select>

          {
            paymentMethod === 'cash' ? 
              <div className="rounded-lg mt-6 bg-gray-100 p-4 relative">
                  <span className="flex justify-start font-bold">Payment Method (CASH)</span>
                  <div className="flex flex-col items-start mt-10 mb-5">
                    <label className="font-semibold my-3">Car Name</label>
                    <label>{carDetail.name}</label>
                  </div>
                  <hr />
                  <div className="flex flex-col items-start mb-5">
                    <label className="font-semibold my-3">Quantity</label>
                    <span>{quantity}</span>
                  </div>
                  <hr />
                  <div className="flex flex-col items-start mb-5">
                    <label className="font-semibold my-3">Total Price</label>
                    <span>Rp. {carDetail.price?carDetail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."): carDetail.price}</span>
                  </div>
                  <hr />
                  <div className="flex flex-col items-start mb-5">
                    <label className="font-semibold my-3">Notes (optional)</label>
                    <textarea type="text" placeholder="Type here" onChange={changeNote} value={notes} className="cash textarea textarea-sm textarea-bordered w-full" />
                  </div>
                  <button onClick={() => submitPaymentCash()} className="btn btn-sm w-full my-2">Submit</button>
                  <Link to={`/detail/${carDetail.id}`} className="btn btn-sm btn-error w-full md-5">Cancel</Link>
              </div> :
              <div className='rounded-lg mt-10 bg-gray-100 p-3'>
                <span className='flex justify-start font-bold'>
                  Payment Method (CREDIT)
                </span>
                <div className='flex flex-col items-start mt-10 mb-5'>
                  <label className='font-semibold'>
                    Term <span className='text-red-600'>*</span>
                  </label>
                  <select
                    className='select select-bordered w-full'
                    onChange={changeTerm}
                    value={term}
                    defaultValue={term}
                  >
                    <option value='3'>3</option>
                    <option value='6'>6</option>
                    <option value='12'>12</option>
                  </select>
                </div>
                <hr />
                <div className='flex flex-col items-start mb-5'>
                  <label className='font-semibold'>
                    DP <span className='text-red-600'>*</span>
                  </label>
                  <input
                    onChange={changeDp}
                    value={dp}
                    type='number'
                    placeholder='Type here'
                    className='credit input input-sm input-bordered w-full'
                  />
                </div>
                <button
                  onClick={() => submitPaymentCredit()}
                  className='btn btn-sm w-full my-2'
                >
                  Submit
                </button>
                <Link
                  to={`/detail/${carDetail.id}`}
                  className='btn btn-sm btn-error w-full md-5'
                >
                  Cancel
                </Link>
              </div>
          }
        </div>
      </div>
    </>
  );
}