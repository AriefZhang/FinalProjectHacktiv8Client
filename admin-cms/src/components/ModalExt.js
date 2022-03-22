import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  fetchExteriors,
  updateExterior,
} from "../store/actionCreators/exteriorActions";

function ModalExt({ ext, show, setShow }) {
  const {
    chassis,
    bumper,
    lights,
    roof,
    spion,
    windShield,
    kacaSamping,
    kacaBelakang,
    tire,
  } = ext;

  const [chass, setChassis] = useState(chassis);
  const [bump, setBump] = useState(bumper);
  const [light, setLight] = useState(lights);
  const [atap, setAtap] = useState(roof);
  const [kacaSpion, setKacaSpion] = useState(spion);
  const [shield, setShield] = useState(windShield);
  const [samping, setSamping] = useState(kacaSamping);
  const [belakang, setBelakang] = useState(kacaBelakang);
  const [ban, setBan] = useState(tire);

  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  function changeChass(e) {
    const value = e.target.value;
    if (value === "true") {
      setChassis(true);
    } else {
      setChassis(false);
    }
  }

  function changeBump(e) {
    const value = e.target.value;
    if (value === "true") {
      setBump(true);
    } else {
      setBump(false);
    }
  }

  function changeLight(e) {
    const value = e.target.value;
    if (value === "true") {
      setLight(true);
    } else {
      setLight(false);
    }
  }
  function changeSpion(e) {
    const value = e.target.value;
    if (value === "true") {
      setKacaSpion(true);
    } else {
      setKacaSpion(false);
    }
  }

  function changeRoof(e) {
    const value = e.target.value;
    if (value === "true") {
      setAtap(true);
    } else {
      setAtap(false);
    }
  }

  function changeShield(e) {
    const value = e.target.value;
    if (value === "true") {
      setShield(true);
    } else {
      setShield(false);
    }
  }

  function changeSamping(e) {
    const value = e.target.value;
    if (value === "true") {
      setSamping(true);
    } else {
      setSamping(false);
    }
  }

  function changeBelakang(e) {
    const value = e.target.value;
    if (value === "true") {
      setBelakang(true);
    } else {
      setBelakang(false);
    }
  }

  function changeBan(e) {
    const value = e.target.value;
    if (value === "true") {
      setBan(true);
    } else {
      setBan(false);
    }
  }

  function exteriorHandler(e) {
    e.preventDefault();
    const data = {
      chassis: chass,
      bumper: bump,
      lights: light,
      roof: atap,
      spion: kacaSpion,
      windShield: shield,
      kacaSamping: samping,
      kacaBelakang: belakang,
      tire: ban,
    };

    dispatch(updateExterior(data, ext.id)).then((data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Success update inspection",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(fetchExteriors());
      handleClose();
    });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Update Exterior Inspections with id:{ext.id}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={exteriorHandler}>
            <div className='mb-3'>
              <label className='form-label'>Chassis Inspection status:</label>
              <select
                value={chass}
                onChange={changeChass}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Bumper Inspection status: &nbsp;{" "}
              </label>
              <select
                value={bump}
                onChange={changeBump}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Lights Inspection status: &nbsp;
              </label>
              <select
                value={light}
                onChange={changeLight}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Roof Inspection status: &nbsp;
              </label>
              <select
                value={atap}
                onChange={changeRoof}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Spion Inspection status: &nbsp;
              </label>
              <select
                value={kacaSpion}
                onChange={changeSpion}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Wind Shield Inspection status: &nbsp;
              </label>
              <select
                value={shield}
                onChange={changeShield}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Side Glass Inspection status: &nbsp;
              </label>
              <select
                value={samping}
                onChange={changeSamping}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Back Glass Inspection status: &nbsp;
              </label>
              <select
                value={belakang}
                onChange={changeBelakang}
                class='form-select'
                aria-label='Default select example'
              >
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Tire Inspection status: &nbsp;
              </label>
              <select
                value={ban}
                onChange={changeBan}
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

export default ModalExt;
