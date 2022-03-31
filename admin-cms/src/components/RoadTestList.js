import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRoadTest } from "../store/actionCreators/roadtestActions";
import Loading from "./Loading";
import RoadTest from "./RoadTest";

function RoadTestList({ isLoading }) {
  const { roadtests } = useSelector((state) => state.roadTestReducer);
  const dispatch = useDispatch();
  console.log(roadtests);

  useEffect(() => {
    dispatch(fetchRoadTest());
  }, [dispatch]);

  return (
    <>
      <div id='roadtest-header'>
        <h1 className='mb-3 col-6'>Road Test Inspection List</h1>
      </div>

      {isLoading ? (
        <Loading type={"spin"} color={"#0E3EDA"} />
      ) : (
        <table className='table table-light table-striped'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Engine Starting</th>
              <th scope='col'>Engine Idling</th>
              <th scope='col'>Steering System</th>
              <th scope='col'>Acceleration</th>
              <th scope='col'>Engine Sound</th>
              <th scope='col'>Brake System</th>
              <th scope='col'>Inspection ID</th>
              <th scope='col'>Inspected By</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roadtests
              .sort((a, b) => a.id - b.id)
              .map((road) => {
                return <RoadTest road={road} key={road.id} />;
              })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default RoadTestList;
