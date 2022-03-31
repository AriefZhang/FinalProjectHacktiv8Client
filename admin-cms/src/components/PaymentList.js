import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPayments } from "../store/actionCreators/paymentActions";
import Loading from "./Loading";
import Payment from "./Payment";

function PaymentList({ isLoading }) {
  const { payments } = useSelector((state) => state.paymentReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPayments());
  }, [dispatch]);

  return (
    <>
      <div id='car-header'>
        <h1 className='mb-3 col-3'>Payment List</h1>
      </div>

      {isLoading ? (
        <Loading type={"spin"} color={"#0E3EDA"} />
      ) : (
        <table className='table table-light table-striped'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Car ID</th>
              <th scope='col'>BoughtDate</th>
              <th scope='col'>Paid Off</th>
              <th scope='col'>Price</th>
              <th scope='col'>Payment Type</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments
              .sort((a, b) => a.id - b.id)
              .map((pay) => {
                return <Payment pay={pay} key={pay.id} />;
              })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default PaymentList;
