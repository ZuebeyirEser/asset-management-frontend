    import React from 'react';
    import EmployeeService from '../services/EmployeeService'; 
    import { useNavigate } from 'react-router-dom';
    import { useEffect, useState } from 'react';

    function ListEmployeeComponent() {

        const navigate = useNavigate();
        const [employees, setEmployees] = useState([]);


        useEffect(() => {
            EmployeeService.getEmployees()
            .then((res) => {
                setEmployees(res.data)
            })
            .catch(error => {
                console.log("there is fetching issue with employees");
            });
        }, []);

        const addEmployee = () => {
            navigate('/add-employees')
        };
        
        return (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <h2 className="text-center mb-4 text-lg font-semibold">Employee List</h2>
                    <div className="mt-5">
                            <button className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-full shadow hover:bg-gray-100 transition ease-in-out duration-300" onClick={addEmployee}>
                                Add Employee
                            </button>
                        </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Employee First Name</th>
                                <th scope="col" className="px-6 py-3">Employee Last Name</th>
                                <th scope="col" className="px-6 py-3">Employee Email Id</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id} className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {employee.firstName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {employee.lastName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {employee.emailId}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        );
        
        
    }

    export default ListEmployeeComponent;