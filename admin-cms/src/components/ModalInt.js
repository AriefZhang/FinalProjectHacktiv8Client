import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  fetchInteriors,
  updateInterior,
} from "../store/actionCreators/interiorActions";

function ModalInt({ int, show, setShow }) {
  const {
    speedometer,
    klakson,
    steeringWheel,
    rearViewMirror,
    dashboard,
    seats,
    gasPedal,
    brakePedal,
  } = int;

  const [speedo, setSpeedo] = useState(speedometer);
  const [klak, setKlakson] = useState(klakson);
  const [steering, setSteering] = useState(steeringWheel);
  const [rear, setRear] = useState(rearViewMirror);
  const [dash, setDash] = useState(dashboard);
  const [seat, setSeat] = useState(seats);
  const [gas, setGas] = useState(gasPedal);
  const [brake, setBrake] = useState(brakePedal);

  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  function changeSpeedo(e) {
    const value = e.target.value;
    if (value === "true") {
      setSpeedo(true);
    } else {
      setSpeedo(false);
    }
  }

  function changeKlak(e) {
    const value = e.target.value;
    if (value === "true") {
      setKlakson(true);
    } else {
      setKlakson(false);
    }
  }

  function changeSteer(e) {
    const value = e.target.value;
    if (value === "true") {
      setSteering(true);
    } else {
      setSteering(false);
    }
  }
  function changeRear(e) {
    const value = e.target.value;
    if (value === "true") {
      setRear(true);
    } else {
      setRear(false);
    }
  }

  function changeDash(e) {
    const value = e.target.value;
    if (value === "true") {
      setDash(true);
    } else {
      setDash(false);
    }
  }

  function changeSeat(e) {
    const value = e.target.value;
    if (value === "true") {
      setSeat(true);
    } else {
      setSeat(false);
    }
  }

  function changeGas(e) {
    const value = e.target.value;
    if (value === "true") {
      setGas(true);
    } else {
      setGas(false);
    }
  }

  function changeBrake(e) {
    const value = e.target.value;
    if (value === "true") {
      setBrake(true);
    } else {
      setBrake(false);
    }
  }

  function interiorHandler(e) {
    e.preventDefault();
    const data = {
      speedometer: speedo,
      klakson: klak,
      steeringWheel: steering,
      rearViewMirror: rear,
      dashboard: dash,
      seats: seat,
      gasPedal: gas,
      brakePedal: brake,
    };

    dispatch(updateInterior(data, int.id)).then((data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Success update inspection",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(fetchInteriors());
      handleClose();
    });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Update Interior Inspections with id: {int.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={interiorHandler}>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Speedometer Inspection status:
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='speedo'
                  id='speedo1'
                  value='true'
                  checked={speedo === true}
                  onChange={changeSpeedo}
                />
                <label class='form-check-label' for='speedo1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='speedo'
                  id='speedo2'
                  value='false'
                  checked={speedo === false}
                  onChange={changeSpeedo}
                />
                <label class='form-check-label' for='speedo2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Horn Inspection status: &nbsp;{" "}
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='klak'
                  id='klak1'
                  value='true'
                  checked={klak === true}
                  onChange={changeKlak}
                />
                <label class='form-check-label' for='klak1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='klak'
                  id='klak2'
                  value='false'
                  checked={klak === false}
                  onChange={changeKlak}
                />
                <label class='form-check-label' for='klak2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Steering Wheel Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='steering'
                  id='steering1'
                  value='true'
                  checked={steering === true}
                  onChange={changeSteer}
                />
                <label class='form-check-label' for='steering1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='steering'
                  id='steering2'
                  value='false'
                  checked={steering === false}
                  onChange={changeSteer}
                />
                <label class='form-check-label' for='steering2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Rear View Mirror Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='rear'
                  id='rear1'
                  value='true'
                  checked={rear === true}
                  onChange={changeRear}
                />
                <label class='form-check-label' for='rear1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='rear'
                  id='rear2'
                  value='false'
                  checked={rear === false}
                  onChange={changeRear}
                />
                <label class='form-check-label' for='rear2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Dashboard Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='dash'
                  id='dash1'
                  value='true'
                  checked={dash === true}
                  onChange={changeDash}
                />
                <label class='form-check-label' for='dash1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='dash'
                  id='dash2'
                  value='false'
                  checked={dash === false}
                  onChange={changeDash}
                />
                <label class='form-check-label' for='dash2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Seats Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='seat'
                  id='seat1'
                  value='true'
                  checked={seat === true}
                  onChange={changeSeat}
                />
                <label class='form-check-label' for='seat1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='seat'
                  id='seat2'
                  value='false'
                  checked={seat === false}
                  onChange={changeSeat}
                />
                <label class='form-check-label' for='seat2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Gas Pedal Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='gas'
                  id='gas1'
                  value='true'
                  checked={gas === true}
                  onChange={changeGas}
                />
                <label class='form-check-label' for='gas1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='gas'
                  id='gas2'
                  value='false'
                  checked={gas === false}
                  onChange={changeGas}
                />
                <label class='form-check-label' for='gas2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Brake Pedal Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='brake'
                  id='brake1'
                  value='true'
                  checked={brake === true}
                  onChange={changeBrake}
                />
                <label class='form-check-label' for='brake1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='brake'
                  id='brake2'
                  value='false'
                  checked={brake === false}
                  onChange={changeBrake}
                />
                <label class='form-check-label' for='brake2'>
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

export default ModalInt;
