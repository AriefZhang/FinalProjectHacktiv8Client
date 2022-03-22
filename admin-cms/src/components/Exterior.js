import { useState } from "react";
import ModalExt from "./ModalExt";

function Exterior({ ext }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModalExt ext={ext} show={show} setShow={setShow} />
      <tr>
        <td>{ext.id}</td>
        <td>
          {ext.chassis === true ? (
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
          {ext.bumper === true ? (
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
          {ext.lights === true ? (
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
          {ext.roof === true ? (
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
          {ext.spion === true ? (
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
          {ext.windShield === true ? (
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
          {ext.kacaSamping === true ? (
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
          {ext.kacaBelakang === true ? (
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
          {ext.tire === true ? (
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
        <td>{ext.InspectionId}</td>
        <td>{ext.inspectedBy}</td>
        <td>
          <button onClick={handleShow} className='btn btn-secondary mx-1'>
            Update Exterior
          </button>
        </td>
      </tr>
    </>
  );
}

export default Exterior;
