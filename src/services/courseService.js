import apiClient from "./services.js";

export default {
    getAllCourses() {
      return apiClient.get(`/`);
    },
    createCourse(data) {
      console.log("create course");
      console.log(data);
      return apiClient.post(`/api/courses`, data);
    },
    updateCourse(id,data) {
      return apiClient.put(`/${id}`, data);
    },
    deleteCourse(id) {
      return apiClient.delete(`/${id}`);
    },
  };
  