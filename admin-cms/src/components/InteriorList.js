import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInteriors } from "../store/actionCreators/interiorActions";
import Loading from "./Loading";

import Interior from "./Interior";

function InteriorList({ isLoading }) {
  const { interiors } = useSelector((state) => state.interiorReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInteriors());
  }, [dispatch]);

  return (
    <>
      <div id='interior-header'>
        <h1 className='mb-3 col-6'>Interior Inspection List</h1>
      </div>

      {isLoading ? (
        <Loading type={"spin"} color={"#0E3EDA"} />
      ) : (
        <table className='table table-dark table-striped'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Speedometer</th>
              <th scope='col'>Horn</th>
              <th scope='col'>Steering Wheel</th>
              <th scope='col'>Rear View Mirror</th>
              <th scope='col'>Dashboard</th>
              <th scope='col'>Seats</th>
              <th scope='col'>Gas Pedal</th>
              <th scope='col'>Break Pedal</th>
              <th scope='col'>Inspection ID</th>
              <th scope='col'>Inspected By</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {interiors
              .sort((a, b) => a.id - b.id)
              .map((int) => {
                return <Interior int={int} key={int.id} />;
              })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default InteriorList;
