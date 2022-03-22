import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExteriors } from "../store/actionCreators/exteriorActions";
import Loading from "./Loading";
import Exterior from "./Exterior";

function ExteriorList({ isLoading }) {
  const { exteriors } = useSelector((state) => state.exteriorReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExteriors());
  }, [dispatch]);

  return (
    <>
      <div id='exterior-header'>
        <h1 className='mb-3 col-6'>Exterior Inspection List</h1>
      </div>

      {isLoading ? (
        <Loading type={"spin"} color={"#0E3EDA"} />
      ) : (
        <table className='table table-dark table-striped'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Chassis</th>
              <th scope='col'>Bumper</th>
              <th scope='col'>Lights</th>
              <th scope='col'>Roof</th>
              <th scope='col'>Spion</th>
              <th scope='col'>Wind Shield</th>
              <th scope='col'>Side Glass</th>
              <th scope='col'>Back Glass</th>
              <th scope='col'>Tire</th>
              <th scope='col'>Inspection ID</th>
              <th scope='col'>Inspected By</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exteriors
              .sort((a, b) => a.id - b.id)
              .map((ext) => {
                return <Exterior ext={ext} key={ext.id} />;
              })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ExteriorList;
