import { useState } from "react";
import ModalCar from "./ModalCar";
function Car({ car }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModalCar car={car} show={show} setShow={setShow} />
      <tr>
        <td>{car.id}</td>
        <td>{car.name}</td>
        <td>{car.description}</td>
        <td>{new Date(car.yearMade).getFullYear()}</td>
        <td>
          {car.passedInspection === true ? (
            <i
              class='fa-solid fa-circle-check fa-xl'
              style={{ color: "green" }}
            ></i>
          ) : (
            <i
              class='fa-solid fa-circle-xmark fa-xl'
              style={{ color: "red" }}
            ></i>
          )}
        </td>
        <td>{car.status}</td>
        <td>
          <button onClick={handleShow} className='btn btn-secondary mx-1'>
            Update Inspection
          </button>
        </td>
      </tr>
    </>
  );
}

export default Car;
