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
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data})
        }).catch(error => {
            console.log("there is fetching issue with employees");
        });
    }
    render() {
        return (
            <div className='flex flex-col space-x-12 content-center'>
                <h2 className='text-center'>Employee List</h2>
                <div>
                    <table className="w-full">
                        <thead className="text-xm">
                            <tr className='flex space-x-48 border-b'>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                                this.state.employees.map(
                                    employee => 
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>

                                )
                           } 
                        </tbody>
                    </table>
                </div>
            </div>
            
        );
    }
}

export default ListEmployeeComponent;