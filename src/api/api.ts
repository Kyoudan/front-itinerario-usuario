import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-itinerario-adherbal-production.up.railway.app",
  timeout: 10000,
});
