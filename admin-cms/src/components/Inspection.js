import { useState } from "react";
import ModalInspection from "./ModalInspect";

function Inspection({ inspection }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModalInspection inspection={inspection} show={show} setShow={setShow} />
      <tr>
        <td>{inspection.id}</td>
        <td>{inspection.CarId}</td>
        <td>
          {inspection.mainInspection === true ? (
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
        <td>
          {inspection.exteriorInspection === true ? (
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
        <td>
          {inspection.interiorInspection === true ? (
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
        <td>
          {inspection.roadTest === true ? (
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
        <td>
          {inspection.kolongTest === true ? (
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
        <td>{inspection.inspectedBy}</td>
        <td>
          <button onClick={handleShow} className='btn btn-secondary mx-1'>
            Update Inspection
          </button>
        </td>
      </tr>
    </>
  );
}

export default Inspection;
