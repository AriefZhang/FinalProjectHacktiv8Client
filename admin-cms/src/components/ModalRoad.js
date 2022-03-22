import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  fetchRoadTest,
  updateRoadTest,
} from "../store/actionCreators/roadtestActions";
function ModalRoad({ road, show, setShow }) {
  const {
    engineStarting,
    engineIdling,
    steeringSystem,
    acceleration,
    engineSound,
    brake,
  } = road;

  const [start, setStart] = useState(engineStarting);
  const [idle, setIdle] = useState(engineIdling);
  const [steer, setSteer] = useState(steeringSystem);
  const [acc, setAcc] = useState(acceleration);
  const [sound, setSound] = useState(engineSound);
  const [brakeSys, setBrakeSys] = useState(brake);

  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  function changeStart(e) {
    const value = e.target.value;
    if (value === "true") {
      setStart(true);
    } else {
      setStart(false);
    }
  }

  function changeIdle(e) {
    const value = e.target.value;
    if (value === "true") {
      setIdle(true);
    } else {
      setIdle(false);
    }
  }

  function changeSteer(e) {
    const value = e.target.value;
    if (value === "true") {
      setSteer(true);
    } else {
      setSteer(false);
    }
  }
  function changeAcc(e) {
    const value = e.target.value;
    if (value === "true") {
      setAcc(true);
    } else {
      setAcc(false);
    }
  }

  function changeSound(e) {
    const value = e.target.value;
    if (value === "true") {
      setSound(true);
    } else {
      setSound(false);
    }
  }

  function changeBrake(e) {
    const value = e.target.value;
    if (value === "true") {
      setBrakeSys(true);
    } else {
      setBrakeSys(false);
    }
  }

  function roadTestHandler(e) {
    e.preventDefault();
    const data = {
      engineStarting: start,
      engineIdling: idle,
      steeringSystem: steer,
      acceleration: acc,
      engineSound: sound,
      brake: brakeSys,
    };

    dispatch(updateRoadTest(data, road.id)).then((data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Success update inspection",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(fetchRoadTest());
      handleClose();
    });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Update Road Test Inspections with id: {road.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={roadTestHandler}>
            <div className='mb-3'>
              <label className='form-label'>
                Engine Starting Inspection status:
              </label>
              <select
                value={start}
                onChange={changeStart}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Engine Idling Inspection status: &nbsp;{" "}
              </label>
              <select
                value={idle}
                onChange={changeIdle}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Steering System Inspection status: &nbsp;
              </label>
              <select
                value={steer}
                onChange={changeSteer}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Acceleration Inspection status: &nbsp;
              </label>
              <select
                value={acc}
                onChange={changeAcc}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Engine Sound Inspection status: &nbsp;
              </label>
              <select
                value={sound}
                onChange={changeSound}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Brake System Inspection status: &nbsp;
              </label>
              <select
                value={brakeSys}
                onChange={changeBrake}
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

export default ModalRoad;
