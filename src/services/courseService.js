import apiClient from "./services.js";

export default {
    getAllCourses() {
      return apiClient.get(`/course-t2`);
    },
    createCourse(data) {
      console.log("create course");
      console.log(data);
      return apiClient.post(`/course-t2`, data);
    },
    updateCourse(id,data) {
      return apiClient.put(`/course-t2/${id}`, data);
    },
    deleteCourse(id) {
      return apiClient.delete(`/course-t2/${id}`);
    },
  };
  