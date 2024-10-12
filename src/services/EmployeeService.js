import axios from "axios";
const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

const getAuthHeader = () => {
    const token = localStorage.authToken;
    return { headers: { 'Authorization': `Bearer ${token}` } };
};

const EmployeeService = {
    getEmployees: function() {
        return axios.get(EMPLOYEE_API_BASE_URL, getAuthHeader());
    },
    getEmployeesByUserId: function(userId) {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/${userId}`,getAuthHeader());
    },
    addEmployee: function(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee, getAuthHeader());
    },
    updateEmployee: function(employeeId, employee) {
        return axios.put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employee, getAuthHeader());
    },
    deleteEmployee: function(employeeId) {
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, getAuthHeader());
    },
    getEmployeeById: function(employeeId) {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, getAuthHeader());
    },
    fetchEmp: async function() {
        try {
            const response = await axios.get(EMPLOYEE_API_BASE_URL, getAuthHeader());
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    }
};


export default EmployeeService;