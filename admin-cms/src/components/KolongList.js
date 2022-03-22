import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchKolong } from "../store/actionCreators/kolongActions";
import Loading from "./Loading";
import Kolong from "./Kolong";

function KolongList({ isLoading }) {
  const { kolongs } = useSelector((state) => state.kolongReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKolong());
  }, [dispatch]);

  return (
    <>
      <div id='interior-header'>
        <h1 className='mb-3 col-6'>Bottom Inspection List</h1>
      </div>

      {isLoading ? (
        <Loading type={"spin"} color={"#0E3EDA"} />
      ) : (
        <table className='table table-dark table-striped'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Lubricants</th>
              <th scope='col'>Transmission</th>
              <th scope='col'>Brake Oil</th>
              <th scope='col'>Radiator</th>
              <th scope='col'>Car Battery</th>
              <th scope='col'>Bottom Cover</th>
              <th scope='col'>Exhaust</th>
              <th scope='col'>Tire Balance</th>
              <th scope='col'>Shockbreaker</th>
              <th scope='col'>Master Brake</th>
              <th scope='col'>Inspection ID</th>
              <th scope='col'>Inspected By</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {kolongs
              .sort((a, b) => a.id - b.id)
              .map((kolong) => {
                return <Kolong kolong={kolong} key={kolong.id} />;
              })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default KolongList;
