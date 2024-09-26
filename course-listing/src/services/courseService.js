import apiClient from "./services.js";

export default {
    getAllCourses() {
      return apiClient.get(`/api/courses`);
    },
    createCourse(data) {
      return apiClient.post(`/api/courses`, data);
    },
    updateCourse(data) {
      return apiClient.put(`/api/courses/${id}`, data);
    },
    deleteCourse(id) {
      return apiClient.delete(`/api/courses/${id}`);
    },
  };
  