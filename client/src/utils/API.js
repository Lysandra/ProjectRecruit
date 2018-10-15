import axios from "axios";

export default {
  // Get all recruiters
  getRecruiters: function() {
    return axios.get("/api/recruiters");
  },

  //Get recruiter by ID
  getRecruiter: function(id) {
    return axios.get("/api/recruiters/id");
  },

  // Get all projects
  getProjects: function() {
    return axios.get("/api/projects");
  },

  // Get project by ID
  getProject: function(id) {
    return axios.get("/api/projects/id");
  },
    
  getCandidates: function() {
    return axios.get("/api/candidates");
  },
};
