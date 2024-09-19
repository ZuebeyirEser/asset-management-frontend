import axios from "axios";
const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/auth/register';

const AuthenticationService = {
    registerUser: function(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
}