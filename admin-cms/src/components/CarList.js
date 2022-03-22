import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../store/actionCreators/carActions";
import Loading from "./Loading";
import Car from "./Car";

function CarList({ isLoading }) {
  const { cars } = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <div id='car-header'>
        <h1 className='mb-3 col-3'>Car List</h1>
      </div>

      {isLoading ? (
        <Loading type={"spin"} color={"#0E3EDA"} />
      ) : (
        <table className='table table-dark table-striped'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Description</th>
              <th scope='col'>Make Year</th>
              <th scope='col'>Passed Inspection</th>
              <th scope='col'>Status</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars
              .sort((a, b) => a.id - b.id)
              .map((car) => {
                return <Car car={car} key={car.id} />;
              })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default CarList;
