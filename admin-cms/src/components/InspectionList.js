import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInspections } from "../store/actionCreators/inspectionActions";
import Loading from "./Loading";
import Inspection from "./Inspection";

function InspectionList({ isLoading }) {
  const { inspections } = useSelector((state) => state.inspectionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInspections());
  }, [dispatch]);

  return (
    <>
      <div id='inspection-header'>
        <h1 className='mb-3 col-3'>Inspection List</h1>
      </div>

      {isLoading ? (
        <Loading type={"spin"} color={"#0E3EDA"} />
      ) : (
        <table className='table table-dark table-striped'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Car ID</th>
              <th scope='col'>Main Inspection</th>
              <th scope='col'>Exterior Inspection</th>
              <th scope='col'>Interior Inspection</th>
              <th scope='col'>Road Test Inspection</th>
              <th scope='col'>Kolong Inspection</th>
              <th scope='col'>Inspected By</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inspections
              .sort((a, b) => a.id - b.id)
              .map((inspection) => {
                return (
                  <Inspection inspection={inspection} key={inspection.id} />
                );
              })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default InspectionList;
