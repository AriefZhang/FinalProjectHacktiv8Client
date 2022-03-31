import { useState } from "react";
import ModalPayment from "./ModalPayment";
import {
  fetchPayments,
  updatePaid,
} from "../store/actionCreators/paymentActions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

function Payment({ pay }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [paid, setPaid] = useState(pay.paidOff);
  const dispatch = useDispatch();

  function changePaid(e) {
    if (e.target.value === "true") {
      setPaid(true);
      const data = {
        paidOff: true,
      };
      dispatch(updatePaid(data, pay.id)).then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Success update payment status",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(fetchPayments);
      });
    } else {
      setPaid(false);
      const data = {
        paidOff: false,
      };
      dispatch(updatePaid(data, pay.id)).then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Success update payment status",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(fetchPayments);
      });
      setPaid(false);
    }
  }

  return (
    <>
      <ModalPayment orderId={pay.orderId} show={show} setShow={setShow} />
      <tr>
        <td>{pay.id}</td>
        <td>{pay.CarId}</td>
        <td>{new Date(pay.boughtDate).toLocaleDateString()}</td>
        <td>
          <select
            value={paid}
            onChange={changePaid}
            class='form-select'
            aria-label='Default select example'
          >
            <option value='true'>Paid</option>
            <option value='false'>Not Paid</option>
          </select>
        </td>
        <td>
          {pay.price.toLocaleString("id", {
            style: "currency",
            currency: "IDR",
          })}
        </td>
        <td>{pay.saved_token_id === "CASH" ? "Cash" : "Credit"}</td>
        <td>
          <button onClick={handleShow} className='btn btn-secondary mx-1'>
            Check Payment
          </button>
        </td>
      </tr>
    </>
  );
}

export default Payment;
