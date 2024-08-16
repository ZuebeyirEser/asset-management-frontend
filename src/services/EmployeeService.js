import axios from "axios";
const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

const EmployeeService = {
    getEmployees: function() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    },
    addEmployee: function(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    },
    updateEmployee: function(employeeId, employee) {
        return axios.put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employee);
    },
    deleteEmployee: function(employeeId) {
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
    }
};


export default EmployeeService;