import { USER_LOGIN, USER_LOGOUT } from "../actionTypes";

const baseUrl = "https://autoclassic-hacktiv8.herokuapp.com";

// User
export function loginAction(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/admins/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((resp) => {
          if (!resp.ok) {
            return resp.text().then((text) => {
              throw new Error(JSON.parse(text).message);
            });
          } else {
            return resp.json();
          }
        })
        .then((data) => {
          localStorage.setItem("login", true);
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("email", data.email);
          dispatch(userLogin());
          resolve("Login success");
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

// Register

export function registerUser(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/admins/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((resp) => {
          if (!resp.ok) {
            return resp.text().then((text) => {
              throw new Error(JSON.parse(text).message);
            });
          } else {
            return resp.json();
          }
        })
        .then((data) => {
          resolve("Register success");
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function userLogin() {
  return {
    type: USER_LOGIN,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
