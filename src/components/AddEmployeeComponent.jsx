import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddEmployeeComponent() {
    const  [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formState.firstName || !formState.lastName || !formState.emailId) {
            alert("Please fill out all fields.");
            return;
        }

        console.log('Form submitted:', formState);
        // Reset form after submission
        setFormState({ firstName: '', lastName: '', emailId: '' });
    }
    const navigate = useNavigate();
    const backToHome = () => {
        navigate('/');
    }
    
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Add New Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        First Name
                    </label>
                    <input 
                        type="text"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter first name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Last Name
                    </label>
                    <input 
                        type="text"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter last name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input 
                        type="email"
                        name="emailId"
                        value={formState.emailId}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter email"
                    />
                </div>
                <div className="flex space-x-36 text-center">
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Add Employee
                    </button>
                    <button 
                        onClick={backToHome}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
    
    
};


export default AddEmployeeComponent;
