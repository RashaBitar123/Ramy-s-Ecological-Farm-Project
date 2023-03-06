import axios from "axios";

export const httpCommon = axios.create({
  baseURL: "https://localhost:7063/",

  headers: {
    "Content-type":
      "application/json" /*changes upon the request if it is images and videos*/,
  },
});
