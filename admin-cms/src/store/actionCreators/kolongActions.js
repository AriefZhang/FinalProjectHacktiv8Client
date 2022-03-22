import { FETCH_KOLONG } from "../actionTypes";

import axios from "axios";

const baseUrl = "http://localhost:3000";

export function fetchKolong() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseUrl}/inspections/kolong-detail`)
        .then((resp) => {
          dispatch(fetchKolongAction(resp.data));
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function updateKolong(payload, id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${baseUrl}/inspections/kolong-detail/${id}`, payload, {
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

export function fetchKolongAction(payload) {
  return {
    type: FETCH_KOLONG,
    payload,
  };
}
