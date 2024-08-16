    import React from 'react';
    import EmployeeService from '../services/EmployeeService'; 
    import { useNavigate } from 'react-router-dom';
    import { useEffect, useState } from 'react';

    function ListEmployeeComponent() {

        const navigate = useNavigate();
        const [employees, setEmployees] = useState([]);
        const [editingEmployee, setEditingEmployee] = useState(null);
        

        useEffect(() => {
            fetchEmployees();
        }, []);

        const fetchEmployees = () => {
            EmployeeService.getEmployees()
            .then((res) => {
                setEmployees(res.data)
            })
            .catch(error => {
                console.log("there is fetching issue with employees");
            });
        }
        const startEditEmployee = (employee) => {
            setEditingEmployee(employee);
        }

        const addEmployee = () => {
            navigate('/add-employees')
        };

        const cancelEdit = () => {
            setEditingEmployee(null);
        };
        const deleteEmployee = (employeesId) => {
            EmployeeService.deleteEmployee(employeesId)
                .then(() => {
                setEmployees(employees.filter(employee => employee.id !== employeesId));
            })
                .catch((error) => {
                    console.log('There was an error deleting the employee', error);
            });
        }

        const saveEmployee = () => {
            EmployeeService.updateEmployee(editingEmployee.id, editingEmployee)
                .then(() => {
                    setEditingEmployee(null);  
                    fetchEmployees();  
                })
                .catch((error) => {
                    console.log('There was an error updating the employee', error);
                });
        };
        const handleChange = (e) => {
            const { name, value } = e.target;
            setEditingEmployee({ ...editingEmployee, [name]: value });
        };
        
        return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <h2 className="text-center mb-4 text-lg font-semibold">Employee List</h2>
                <div className="mt-5">
                    <button
                        className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-full shadow hover:bg-gray-100 transition ease-in-out duration-300"
                        onClick={addEmployee}
                    >
                        Add Employee
                    </button>
                </div>
    
                {editingEmployee ? (
                    <div className="max-w-md mx-auto mt-10">
                        <h2 className="text-center mb-4 text-lg font-semibold">Edit Employee</h2>
                        <div>
                            <label className="block text-gray-700">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={editingEmployee.firstName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={editingEmployee.lastName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Email Id</label>
                            <input
                                type="email"
                                name="emailId"
                                value={editingEmployee.emailId}
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="mt-6 text-center">
                            <button
                                className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-purple-700 transition ease-in-out duration-300 mr-4"
                                onClick={saveEmployee}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-gray-700 transition ease-in-out duration-300"
                                onClick={cancelEdit}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <table className="overflow-scroll w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-6">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Employee First Name</th>
                                <th scope="col" className="px-6 py-3">Employee Last Name</th>
                                <th scope="col" className="px-6 py-3">Employee Email Id</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-grey-light overflow-x-scroll w-full">
                            {employees.map((employee) => (
                                <tr key={employee.id} className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {employee.firstName}
                                    </th>
                                    <td className="px-6 py-4">{employee.lastName}</td>
                                    <td className="px-6 py-4">{employee.emailId}</td>
                                    <td className="inline-flex px-6 py-4">
                                        <button
                                            onClick={() => startEditEmployee(employee)}
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteEmployee(employee.id)}
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
        
        
    }

    export default ListEmployeeComponent;