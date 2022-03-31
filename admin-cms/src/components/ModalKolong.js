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
              <label className='form-label col-6'>
                Lubricant Inspection status:
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='oli'
                  id='oli1'
                  value='true'
                  checked={oli === true}
                  onChange={changeOli}
                />
                <label class='form-check-label' for='oli1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='oli'
                  id='oli2'
                  value='false'
                  checked={oli === false}
                  onChange={changeOli}
                />
                <label class='form-check-label' for='oli2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Transmission Inspection status: &nbsp;{" "}
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='trans'
                  id='trans1'
                  value='true'
                  checked={trans === true}
                  onChange={changeTrans}
                />
                <label class='form-check-label' for='trans1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='trans'
                  id='trans2'
                  value='false'
                  checked={trans === false}
                  onChange={changeTrans}
                />
                <label class='form-check-label' for='trans2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Brake Oil Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='minyak'
                  id='minyak1'
                  value='true'
                  checked={minyak === true}
                  onChange={changeMinyak}
                />
                <label class='form-check-label' for='minyak1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='minyak'
                  id='minyak2'
                  value='false'
                  checked={minyak === false}
                  onChange={changeMinyak}
                />
                <label class='form-check-label' for='minyak2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Radiator Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='rad'
                  id='rad1'
                  value='true'
                  checked={rad === true}
                  onChange={changeRad}
                />
                <label class='form-check-label' for='rad1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='rad'
                  id='rad2'
                  value='false'
                  checked={rad === false}
                  onChange={changeRad}
                />
                <label class='form-check-label' for='rad2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Battery Car Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='batt'
                  id='batt1'
                  value='true'
                  checked={batt === true}
                  onChange={changeAki}
                />
                <label class='form-check-label' for='batt1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='batt'
                  id='batt2'
                  value='false'
                  checked={batt === false}
                  onChange={changeAki}
                />
                <label class='form-check-label' for='batt2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Bottom Cover Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='cover'
                  id='cover1'
                  value='true'
                  checked={cover === true}
                  onChange={changeCover}
                />
                <label class='form-check-label' for='cover1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='cover'
                  id='cover2'
                  value='false'
                  checked={cover === false}
                  onChange={changeCover}
                />
                <label class='form-check-label' for='cover2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Exhaust Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='exhaust'
                  id='exhaust1'
                  value='true'
                  checked={exhaust === true}
                  onChange={changeExhaust}
                />
                <label class='form-check-label' for='exhaust1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='exhaust'
                  id='exhaust2'
                  value='false'
                  checked={exhaust === false}
                  onChange={changeExhaust}
                />
                <label class='form-check-label' for='exhaust2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Tire Balance Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='stabil'
                  id='stabil1'
                  value='true'
                  checked={stabil === true}
                  onChange={changeStabil}
                />
                <label class='form-check-label' for='stabil1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='stabil'
                  id='stabil2'
                  value='false'
                  checked={stabil === false}
                  onChange={changeStabil}
                />
                <label class='form-check-label' for='stabil2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                ShockBreaker Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='shock'
                  id='shock1'
                  value='true'
                  checked={shock === true}
                  onChange={changeShock}
                />
                <label class='form-check-label' for='shock1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='shock'
                  id='shock2'
                  value='false'
                  checked={shock === false}
                  onChange={changeShock}
                />
                <label class='form-check-label' for='shock2'>
                  False
                </label>
              </div>
            </div>
            <div className='mb-3 row'>
              <label className='form-label col-6'>
                Master Brake Inspection status: &nbsp;
              </label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='master'
                  id='master1'
                  value='true'
                  checked={master === true}
                  onChange={changeMaster}
                />
                <label class='form-check-label' for='master1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='master'
                  id='master2'
                  value='false'
                  checked={master === false}
                  onChange={changeMaster}
                />
                <label class='form-check-label' for='master2'>
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

export default ModalKolong;
