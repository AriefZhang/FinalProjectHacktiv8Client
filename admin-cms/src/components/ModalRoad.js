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
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Engine Starting Inspection status:
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='start'
                  id='start1'
                  value='true'
                  checked={start === true}
                  onChange={changeStart}
                />
                <label class='form-check-label' for='start1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='start'
                  id='start2'
                  value='false'
                  checked={start === false}
                  onChange={changeStart}
                />
                <label class='form-check-label' for='start2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Engine Idling Inspection status: &nbsp;{" "}
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='idle'
                  id='idle1'
                  value='true'
                  checked={idle === true}
                  onChange={changeIdle}
                />
                <label class='form-check-label' for='idle1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='idle'
                  id='idle2'
                  value='false'
                  checked={idle === false}
                  onChange={changeIdle}
                />
                <label class='form-check-label' for='idle2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Steering System Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='steer'
                  id='steer1'
                  value='true'
                  checked={steer === true}
                  onChange={changeSteer}
                />
                <label class='form-check-label' for='steer1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='steer'
                  id='steer2'
                  value='false'
                  checked={steer === false}
                  onChange={changeSteer}
                />
                <label class='form-check-label' for='steer2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Acceleration Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='acc'
                  id='acc1'
                  value='true'
                  checked={acc === true}
                  onChange={changeAcc}
                />
                <label class='form-check-label' for='acc1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='acc'
                  id='acc2'
                  value='false'
                  checked={acc === false}
                  onChange={changeAcc}
                />
                <label class='form-check-label' for='acc2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Engine Sound Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='sound'
                  id='sound1'
                  value='true'
                  checked={sound === true}
                  onChange={changeSound}
                />
                <label class='form-check-label' for='sound1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='sound'
                  id='sound2'
                  value='false'
                  checked={sound === false}
                  onChange={changeSound}
                />
                <label class='form-check-label' for='sound2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Brake System Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='brakeSys'
                  id='brakeSys1'
                  value='true'
                  checked={brakeSys === true}
                  onChange={changeBrake}
                />
                <label class='form-check-label' for='brakeSys1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='brakeSys'
                  id='brakeSys2'
                  value='false'
                  checked={brakeSys === false}
                  onChange={changeBrake}
                />
                <label class='form-check-label' for='brakeSys2'>
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

export default ModalRoad;
