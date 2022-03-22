import { FETCH_CARS } from "../actionTypes";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export function fetchCars() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseUrl}/cars`)
        .then((resp) => {
          dispatch(fetchCarsAction(resp.data));
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function updateCarInsp(payload, id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${baseUrl}/cars/${id}`, payload, {
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

export function fetchCarsAction(payload) {
  return {
    type: FETCH_CARS,
    payload,
  };
}
