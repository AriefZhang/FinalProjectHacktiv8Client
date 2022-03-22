import { useState } from "react";
import ModalRoad from "./ModalRoad";

function RoadTest({ road }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModalRoad road={road} show={show} setShow={setShow} />
      <tr>
        <td>{road.id}</td>
        <td>
          {road.engineStarting === true ? (
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
          {road.engineIdling === true ? (
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
          {road.steeringSystem === true ? (
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
          {road.acceleration === true ? (
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
          {road.engineSound === true ? (
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
          {road.brake === true ? (
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

        <td>{road.InspectionId}</td>
        <td>{road.inspectedBy}</td>
        <td>
          <button onClick={handleShow} className='btn btn-secondary mx-1'>
            Update RoadTest
          </button>
        </td>
      </tr>
    </>
  );
}

export default RoadTest;
