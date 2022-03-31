import { FETCH_PAYMENTS } from "../actionTypes";
import axios from "axios";

const baseUrl = "https://autoclassic-hacktiv8.herokuapp.com";

export function fetchPayments() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseUrl}/payments/histories`)
        .then((resp) => {
          dispatch(fetchPaymentAction(resp.data));
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function updatePaid(payload, id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${baseUrl}/payments/histories/${id}`, payload, {
          headers: { access_token: localStorage.access_token },
        })
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function checkStatus(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseUrl}/payments/status/midtrans`, payload, {
          headers: { access_token: localStorage.access_token },
        })
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function fetchPaymentAction(payload) {
  return {
    type: FETCH_PAYMENTS,
    payload,
  };
}
