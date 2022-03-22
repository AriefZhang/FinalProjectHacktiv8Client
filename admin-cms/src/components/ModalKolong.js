import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  fetchKolong,
  updateKolong,
} from "../store/actionCreators/kolongActions";
function ModalKolong({ kolong, show, setShow }) {
  const {
    oliMesin,
    transmission,
    minyakRem,
    radiator,
    aki,
    bottomCover,
    knalpot,
    kestabilanBan,
    shockBreaker,
    masterBrake,
  } = kolong;

  const [oli, setOli] = useState(oliMesin);
  const [trans, setTrans] = useState(transmission);
  const [minyak, setMinyak] = useState(minyakRem);
  const [rad, setRad] = useState(radiator);
  const [batt, setBat] = useState(aki);
  const [cover, setCover] = useState(bottomCover);
  const [exhaust, setExhaust] = useState(knalpot);
  const [stabil, setStabil] = useState(kestabilanBan);
  const [shock, setShock] = useState(shockBreaker);
  const [master, setMaster] = useState(masterBrake);

  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  function changeOli(e) {
    const value = e.target.value;
    if (value === "true") {
      setOli(true);
    } else {
      setOli(false);
    }
  }

  function changeTrans(e) {
    const value = e.target.value;
    if (value === "true") {
      setTrans(true);
    } else {
      setTrans(false);
    }
  }

  function changeMinyak(e) {
    const value = e.target.value;
    if (value === "true") {
      setMinyak(true);
    } else {
      setMinyak(false);
    }
  }
  function changeRad(e) {
    const value = e.target.value;
    if (value === "true") {
      setRad(true);
    } else {
      setRad(false);
    }
  }

  function changeAki(e) {
    const value = e.target.value;
    if (value === "true") {
      setBat(true);
    } else {
      setBat(false);
    }
  }

  function changeCover(e) {
    const value = e.target.value;
    if (value === "true") {
      setCover(true);
    } else {
      setCover(false);
    }
  }

  function changeExhaust(e) {
    const value = e.target.value;
    if (value === "true") {
      setExhaust(true);
    } else {
      setExhaust(false);
    }
  }

  function changeStabil(e) {
    const value = e.target.value;
    if (value === "true") {
      setStabil(true);
    } else {
      setStabil(false);
    }
  }

  function changeShock(e) {
    const value = e.target.value;
    if (value === "true") {
      setShock(true);
    } else {
      setShock(false);
    }
  }
  function changeMaster(e) {
    const value = e.target.value;
    if (value === "true") {
      setMaster(true);
    } else {
      setMaster(false);
    }
  }

  function kolongHandler(e) {
    e.preventDefault();
    const data = {
      oliMesin: oli,
      transmission: trans,
      minyakRem: minyak,
      radiator: rad,
      aki: batt,
      bottomCover: cover,
      knalpot: exhaust,
      kestabilanBan: stabil,
      shockBreaker: shock,
      masterBrake: master,
    };

    dispatch(updateKolong(data, kolong.id)).then((data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Success update inspection",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(fetchKolong());
      handleClose();
    });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Update Bottom Inspections with id: {kolong.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={kolongHandler}>
            <div className='mb-3 row'>
              <label className='form-label col'>
                Lubricant Inspection status:
              </label>
              <select
                value={oli}
                onChange={changeOli}
                class='form-select col'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col'>
                Transmission Inspection status: &nbsp;{" "}
              </label>
              <select
                value={trans}
                onChange={changeTrans}
                class='form-select col'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col'>
                Brake Oil Inspection status: &nbsp;
              </label>
              <select
                value={minyak}
                onChange={changeMinyak}
                class='form-select col'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col'>
                Radiator Inspection status: &nbsp;
              </label>
              <select
                value={rad}
                onChange={changeRad}
                class='form-select col'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col'>
                Battery Car Inspection status: &nbsp;
              </label>
              <select
                value={batt}
                onChange={changeAki}
                class='form-select col'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col'>
                Bottom Cover Inspection status: &nbsp;
              </label>
              <select
                value={cover}
                onChange={changeCover}
                class='form-select col'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col'>
                Exhaust Inspection status: &nbsp;
              </label>
              <select
                value={exhaust}
                onChange={changeExhaust}
                class='form-select col'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col'>
                Tire Balance Inspection status: &nbsp;
              </label>
              <select
                value={stabil}
                onChange={changeStabil}
                class='form-select col'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col'>
                ShockBreaker Inspection status: &nbsp;
              </label>
              <select
                value={shock}
                onChange={changeShock}
                class='form-select col'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col'>
                Master Brake Inspection status: &nbsp;
              </label>
              <select
                value={master}
                onChange={changeMaster}
                class='form-select col'
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

export default ModalKolong;
