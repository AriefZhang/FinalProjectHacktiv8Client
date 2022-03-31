import { FETCH_ROADTEST } from "../actionTypes";

import axios from "axios";

const baseUrl = "https://autoclassic-hacktiv8.herokuapp.com";

export function fetchRoadTest() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseUrl}/inspections/roadtest-detail`)
        .then((resp) => {
          dispatch(fetchRoadTestActions(resp.data));
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function updateRoadTest(payload, id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${baseUrl}/inspections/roadtest-detail/${id}`, payload, {
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

export function fetchRoadTestActions(payload) {
  return {
    type: FETCH_ROADTEST,
    payload,
  };
}
