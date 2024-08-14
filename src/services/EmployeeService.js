import axios from "axios";
const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

const EmployeeService = {
    getEmployees: function() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    },
    addEmployee: function(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
};


export default EmployeeService;