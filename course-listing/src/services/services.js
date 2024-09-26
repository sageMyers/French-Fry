import axios from "axios";

var baseurl = "http://localhost:3100"

const apiClient = axios.create({
  baseURL: baseurl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
  },
  transformResponse: function (data) {
    data = JSON.parse(data);
    return data;
  },
});
export default apiClient;