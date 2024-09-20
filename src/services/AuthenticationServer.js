import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/v1/auth';

const AuthenticationService = {
  registerUser: function(userData) {
    return axios.post(`${API_BASE_URL}/register`, userData);
  },
  
  authenticateUser: function(credentials) {
    return axios.post(`${API_BASE_URL}/authenticate`, credentials);
  }
};

export default AuthenticationService;