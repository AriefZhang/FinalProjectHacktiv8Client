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
            <div className='mb-3'>
              <label className='form-label'>
                Speedometer Inspection status:
              </label>
              <select
                value={speedo}
                onChange={changeSpeedo}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Horn Inspection status: &nbsp;{" "}
              </label>
              <select
                value={klak}
                onChange={changeKlak}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Steering Wheel Inspection status: &nbsp;
              </label>
              <select
                value={steering}
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
                Rear View Mirror Inspection status: &nbsp;
              </label>
              <select
                value={rear}
                onChange={changeRear}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Dashboard Inspection status: &nbsp;
              </label>
              <select
                value={dash}
                onChange={changeDash}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Seats Inspection status: &nbsp;
              </label>
              <select
                value={seat}
                onChange={changeSeat}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Gas Pedal Inspection status: &nbsp;
              </label>
              <select
                value={gas}
                onChange={changeGas}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Brake Pedal Inspection status: &nbsp;
              </label>
              <select
                value={brake}
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

export default ModalInt;
