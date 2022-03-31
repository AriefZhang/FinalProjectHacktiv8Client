import { FETCH_INTERIORS } from "../actionTypes";
import axios from "axios";

const baseUrl = "https://autoclassic-hacktiv8.herokuapp.com";

export function fetchInteriors() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseUrl}/inspections/interior-detail`)
        .then((resp) => {
          dispatch(fetchInteriorsAction(resp.data));
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function updateInterior(payload, id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${baseUrl}/inspections/interior-detail/${id}`, payload, {
          headers: {
            access_token: localStorage.access_token,
          },
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

export function fetchInteriorsAction(payload) {
  return {
    type: FETCH_INTERIORS,
    payload,
  };
}
