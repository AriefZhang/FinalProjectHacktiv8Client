import { FETCH_EXTERIORS } from "../actionTypes";

import axios from "axios";

const baseUrl = "https://autoclassic-hacktiv8.herokuapp.com";

export function fetchExteriors() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseUrl}/inspections/exterior-detail`)
        .then((resp) => {
          dispatch(fetchExteriorsActions(resp.data));
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function updateExterior(payload, id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${baseUrl}/inspections/exterior-detail/${id}`, payload, {
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

export function fetchExteriorsActions(payload) {
  return {
    type: FETCH_EXTERIORS,
    payload,
  };
}
