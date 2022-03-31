import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCarInsp, fetchCars } from "../store/actionCreators/carActions";
import Swal from "sweetalert2";

function ModalCar({ car, show, setShow }) {
  console.log(car);
  const { passedInspection } = car;
  const [passed, setPassed] = useState(passedInspection);

  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  function changePassed(e) {
    const value = e.target.value;
    if (value === "true") {
      setPassed(true);
    } else {
      setPassed(false);
    }
  }

  function carPassedHandler(e) {
    e.preventDefault();
    const data = {
      passedInspection: passed,
    };

    dispatch(updateCarInsp(data, car.id)).then((data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Success update inspection",
        showConfirmButton: false,
        timer: 1500,
      });

      dispatch(fetchCars());
      handleClose();
    });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Update Car passed status with car id: {car.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={carPassedHandler}>
            <div className='mb-3'>
              <label className='form-label'>Passed Inspection status:</label>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='passed'
                  id='passed1'
                  value='true'
                  checked={passed === true}
                  onChange={changePassed}
                />
                <label class='form-check-label' for='passed1'>
                  True
                </label>
              </div>
              <div class='form-check col'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='passed'
                  id='passed2'
                  value='false'
                  checked={passed === false}
                  onChange={changePassed}
                />
                <label class='form-check-label' for='passed2'>
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

export default ModalCar;
