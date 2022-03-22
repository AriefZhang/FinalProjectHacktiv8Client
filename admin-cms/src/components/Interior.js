import { useState } from "react";
import ModalInt from "./ModalInt";

function Interior({ int }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModalInt int={int} show={show} setShow={setShow} />
      <tr>
        <td>{int.id}</td>
        <td>
          {int.speedometer === true ? (
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
          {int.klakson === true ? (
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
          {int.steeringWheel === true ? (
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
          {int.rearViewMirror === true ? (
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
          {int.dashboard === true ? (
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
          {int.seats === true ? (
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
          {int.gasPedal === true ? (
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
          {int.brakePedal === true ? (
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
        <td>{int.InspectionId}</td>
        <td>{int.inspectedBy}</td>
        <td>
          <button onClick={handleShow} className='btn btn-secondary mx-1'>
            Update Interior
          </button>
        </td>
      </tr>
    </>
  );
}

export default Interior;
