import { Modal, Button } from "react-bootstrap";
import { checkStatus } from "../store/actionCreators/paymentActions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function ModalPayment({ orderId, show, setShow }) {
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const [status, setStatus] = useState({});

  useEffect(() => {
    dispatch(checkStatus({ order_id: orderId }))
      .then((data) => {
        setStatus(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, orderId]);

  console.log(status);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Payment status with order ID: {orderId.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Approval Code: <b>{status.approval_code}</b>
          </p>
          <p>
            Transaction Time: <b>{status.transaction_time}</b>
          </p>
          <p>
            Grosss Amount: <b>{status.gross_amount}</b>
          </p>
          <p>
            Payment Type: <b>{status.payment_type}</b>
          </p>
          <p>
            Status Code: <b>{status.status_code}</b>
          </p>
          <p>
            Transaction Id: <b>{status.transaction_id}</b>
          </p>
          <p>
            Transaction Status: <b>{status.transaction_status}</b>
          </p>
          <p>
            Merchant ID: <b>{status.merchant_id}</b>
          </p>
          <p>
            Status Message: <b>{status.status_message}</b>
          </p>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPayment;
