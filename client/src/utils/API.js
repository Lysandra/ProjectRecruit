import axios from "axios";

export default {
  // Get all recruiters
  getRecruiters: function() {
    return axios.get("/recruiters");
  },
  
  // Get all projects
  getProjects: function() {
    return axios.get("../projects");
  },

  // Get project by ID
  getProject: function(id) {
    return axios.get("/projects/" + id);
    },
};
