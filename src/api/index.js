import axios from "axios";

const api = axios.create({
  baseURL: "https://vrodriguez.pythonanywhere.com/api",
  timeout: 5000,
});

export default api;
