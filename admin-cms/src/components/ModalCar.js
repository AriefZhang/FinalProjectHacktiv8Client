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
              <label className='form-label'>Main Inspection status:</label>
              <select
                value={passed}
                onChange={changePassed}
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

export default ModalCar;
