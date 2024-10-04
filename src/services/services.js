import axios from "axios";

var baseurl = "";
if (process.env.NODE_ENV === "development") {
  baseurl = "http://localhost:3012/"
} else {
  baseurl = "http://localhost:3012/course-t2/"
}

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