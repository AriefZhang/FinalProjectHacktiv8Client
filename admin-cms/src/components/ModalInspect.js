import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateInspection,
  fetchInspections,
} from "../store/actionCreators/inspectionActions";
import Swal from "sweetalert2";

function ModalInspection({ inspection, show, setShow }) {
  const {
    mainInspection,
    exteriorInspection,
    interiorInspection,
    roadTest,
    kolongTest,
  } = inspection;
  const [main, setMain] = useState(mainInspection);
  const [exterior, setExterior] = useState(exteriorInspection);
  const [interior, setInterior] = useState(interiorInspection);
  const [road, setRoad] = useState(roadTest);
  const [kolong, setKolong] = useState(kolongTest);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  function changeMain(e) {
    const value = e.target.value;
    if (value === "true") {
      setMain(true);
    } else {
      setMain(false);
    }
  }

  function changeExterior(e) {
    const value = e.target.value;
    if (value === "true") {
      setExterior(true);
    } else {
      setExterior(false);
    }
  }

  function changeInterior(e) {
    const value = e.target.value;
    if (value === "true") {
      setInterior(true);
    } else {
      setInterior(false);
    }
  }

  function changeRoad(e) {
    const value = e.target.value;
    if (value === "true") {
      setRoad(true);
    } else {
      setRoad(false);
    }
  }

  function changeKolong(e) {
    const value = e.target.value;
    if (value === "true") {
      setKolong(true);
    } else {
      setKolong(false);
    }
  }

  function inspectionHandler(e) {
    e.preventDefault();
    const data = {
      mainInspection: main,
      exteriorInspection: exterior,
      interiorInspection: interior,
      roadTest: road,
      kolongTest: kolong,
    };

    dispatch(updateInspection(data, inspection.id)).then((data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Success update inspection",
        showConfirmButton: false,
        timer: 1500,
      });

      dispatch(fetchInspections());
      handleClose();
    });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Update Car Inspections with id: {inspection.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={inspectionHandler}>
            <div className='mb-3'>
              <label className='form-label'>Main Inspection status:</label>
              <select
                value={main}
                onChange={changeMain}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Exterior Inspection status: &nbsp;{" "}
              </label>
              <select
                value={exterior}
                onChange={changeExterior}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Interior Inspection status: &nbsp;
              </label>
              <select
                value={interior}
                onChange={changeInterior}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Road test Inspection status: &nbsp;
              </label>
              <select
                value={road}
                onChange={changeRoad}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Kolong test Inspection status: &nbsp;
              </label>
              <select
                value={kolong}
                onChange={changeKolong}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalInspection;
