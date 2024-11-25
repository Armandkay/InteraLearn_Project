import axios from "axios";

// Set the base URL for your backend
const API = axios.create({
  baseURL: "http://localhost/InteraLearn_Backend/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
