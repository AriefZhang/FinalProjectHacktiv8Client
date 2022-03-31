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
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Main Inspection status:
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='main'
                  id='main1'
                  value='true'
                  checked={main === true}
                  onChange={changeMain}
                />
                <label class='form-check-label' for='main1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='main'
                  id='main2'
                  value='false'
                  checked={main === false}
                  onChange={changeMain}
                />
                <label class='form-check-label' for='main2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6 col'>
                Exterior Inspection status: &nbsp;{" "}
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='ext'
                  id='ext1'
                  value='true'
                  checked={exterior === true}
                  onChange={changeExterior}
                />
                <label class='form-check-label' for='ext1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='ext'
                  id='ext2'
                  value='false'
                  checked={exterior === false}
                  onChange={changeExterior}
                />
                <label class='form-check-label' for='ext2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6 col'>
                Interior Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='int'
                  id='int1'
                  value='true'
                  checked={interior === true}
                  onChange={changeInterior}
                />
                <label class='form-check-label' for='int1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='int'
                  id='int2'
                  value='false'
                  checked={interior === false}
                  onChange={changeInterior}
                />
                <label class='form-check-label' for='int2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6 col'>
                Road test Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='road'
                  id='road1'
                  value='true'
                  checked={road === true}
                  onChange={changeRoad}
                />
                <label class='form-check-label' for='road1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='road'
                  id='road2'
                  value='false'
                  checked={road === false}
                  onChange={changeRoad}
                />
                <label class='form-check-label' for='road2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6 col'>
                Kolong test Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='kolong'
                  id='kolong1'
                  value='true'
                  checked={kolong === true}
                  onChange={changeKolong}
                />
                <label class='form-check-label' for='kolong1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='kolong'
                  id='kolong2'
                  value='false'
                  checked={kolong === false}
                  onChange={changeKolong}
                />
                <label class='form-check-label' for='kolong2'>
                  False
                </label>
              </div>
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
