import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    };
    componentDidMount() {
        EmployeeService.getEmployees()
        .then((res) => {
            this.setState({employees: res.data})
        })
        .catch(error => {
            console.log("there is fetching issue with employees");
        });
    }
    render() {
        return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <h2 className="text-center mb-4 text-lg font-semibold">Employee List</h2>
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
                        {this.state.employees.map((employee, index) => (
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
    
}

export default ListEmployeeComponent;