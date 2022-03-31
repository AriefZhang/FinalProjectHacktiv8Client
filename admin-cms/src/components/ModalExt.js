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
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Chassis Inspection status:
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='chass'
                  id='chass1'
                  value='true'
                  checked={chass === true}
                  onChange={changeChass}
                />
                <label class='form-check-label' for='chass1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='chass'
                  id='chass2'
                  value='false'
                  checked={chass === false}
                  onChange={changeChass}
                />
                <label class='form-check-label' for='chass2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Bumper Inspection status: &nbsp;{" "}
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='bump'
                  id='bump1'
                  value='true'
                  checked={bump === true}
                  onChange={changeBump}
                />
                <label class='form-check-label' for='bump1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='bump'
                  id='bump2'
                  value='false'
                  checked={bump === false}
                  onChange={changeBump}
                />
                <label class='form-check-label' for='bump2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Lights Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='light'
                  id='light1'
                  value='true'
                  checked={light === true}
                  onChange={changeLight}
                />
                <label class='form-check-label' for='light1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='light'
                  id='light2'
                  value='false'
                  checked={light === false}
                  onChange={changeLight}
                />
                <label class='form-check-label' for='light2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Roof Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='atap'
                  id='atap1'
                  value='true'
                  checked={atap === true}
                  onChange={changeRoof}
                />
                <label class='form-check-label' for='atap1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='atap'
                  id='atap2'
                  value='false'
                  checked={atap === false}
                  onChange={changeRoof}
                />
                <label class='form-check-label' for='atap2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Spion Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='kacaSpion'
                  id='kacaSpion1'
                  value='true'
                  checked={kacaSpion === true}
                  onChange={changeSpion}
                />
                <label class='form-check-label' for='kacaSpion1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='kacaSpion'
                  id='kacaSpion2'
                  value='false'
                  checked={kacaSpion === false}
                  onChange={changeSpion}
                />
                <label class='form-check-label' for='kacaSpion2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Wind Shield Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='shield'
                  id='shield1'
                  value='true'
                  checked={shield === true}
                  onChange={changeShield}
                />
                <label class='form-check-label' for='shield1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='shield'
                  id='shield2'
                  value='false'
                  checked={shield === false}
                  onChange={changeShield}
                />
                <label class='form-check-label' for='shield2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Side Glass Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='samping'
                  id='samping1'
                  value='true'
                  checked={samping === true}
                  onChange={changeSamping}
                />
                <label class='form-check-label' for='samping1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='samping'
                  id='samping2'
                  value='false'
                  checked={samping === false}
                  onChange={changeSamping}
                />
                <label class='form-check-label' for='samping2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Back Glass Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='belakang'
                  id='belakang1'
                  value='true'
                  checked={belakang === true}
                  onChange={changeBelakang}
                />
                <label class='form-check-label' for='belakang1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='belakang'
                  id='belakang2'
                  value='false'
                  checked={belakang === false}
                  onChange={changeBelakang}
                />
                <label class='form-check-label' for='belakang2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Tire Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='ban'
                  id='ban1'
                  value='true'
                  checked={ban === true}
                  onChange={changeBan}
                />
                <label class='form-check-label' for='ban1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='ban'
                  id='ban2'
                  value='false'
                  checked={ban === false}
                  onChange={changeBan}
                />
                <label class='form-check-label' for='ban2'>
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

export default ModalExt;
