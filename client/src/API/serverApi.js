import axios from "axios";

const instance = axios.create({
  baseURL: "https://autoclassic-hacktiv8.herokuapp.com",
});

export default instance;
