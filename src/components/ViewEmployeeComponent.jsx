import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useParams, useNavigate } from 'react-router-dom';

function ViewEmployeeComponent({userId}) {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        fetchEmployee();
    }, [userId]);

    const fetchEmployee = () => {
        EmployeeService.getEmployeeById(employee.userId)
            .then((res) => {
                setEmployee(res.data);
            })
            .catch((error) => {
                console.log("There was an issue fetching the employee details", error);
            });
    };

    const goBack = () => {
        navigate('/employees');
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-center mb-4 text-lg font-semibold">View Employee Details</h2>
            {employee ? (
                <div>
                    <div className="text-center mb-4">
                        <img 
                            src={employee.profilePictureUrl} 
                            alt={`${employee.firstName} ${employee.lastName}`} 
                            className="w-24 h-24 rounded-full mx-auto"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold">Full Name:</label>
                        <p className="text-gray-900">{employee.firstName} {employee.lastName}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold">Email:</label>
                        <p className="text-gray-900">{employee.emailId}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold">Job Title:</label>
                        <p className="text-gray-900">{employee.jobTitle}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold">Department:</label>
                        <p className="text-gray-900">{employee.department}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold">Phone Number:</label>
                        <p className="text-gray-900">{employee.phoneNumber}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold">Address:</label>
                        <p className="text-gray-900">{employee.address}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold">Date of Birth:</label>
                        <p className="text-gray-900">{employee.dateOfBirth}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold">Date of Joining:</label>
                        <p className="text-gray-900">{employee.dateOfJoining}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold">Salary:</label>
                        <p className="text-gray-900">${employee.salary}</p>
                    </div>
                    <div className="text-center">
                        <button
                            className="bg-gray-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-gray-700 transition ease-in-out duration-300"
                            onClick={goBack}
                        >
                            Back
                        </button>
                    </div>
                </div>
            ) : (
                <p>Loading employee details...</p>
            )}
        </div>
    );
}

export default ViewEmployeeComponent;
