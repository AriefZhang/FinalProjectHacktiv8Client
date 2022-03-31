import { FETCH_INSPECTIONS } from "../actionTypes";
import axios from "axios";

const baseUrl = "https://autoclassic-hacktiv8.herokuapp.com";

export function fetchInspections() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseUrl}/inspections`)
        .then((resp) => {
          dispatch(fetchInspectionsAction(resp.data));
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function getInspection(id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseUrl}/inspections/${id}`)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((err) => reject(err));
    });
  };
}

export function updateInspection(payload, id) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${baseUrl}/inspections/${id}`, payload, {
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

export function fetchInspectionsAction(payload) {
  return {
    type: FETCH_INSPECTIONS,
    payload,
  };
}
