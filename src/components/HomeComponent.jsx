import React from 'react';
const HomeComponent = () => {
    return (
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-2">Welcome to the Employment Management System</h2>
                <p className="text-gray-600">Manage your employees, tasks, assets and more from one place.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-2">Total Employees</h3>
                    <p className="text-3xl font-bold text-blue-600">120</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-2">Active Tasks</h3>
                    <p className="text-3xl font-bold text-green-600">35</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-2">Upcoming Meetings</h3>
                    <p className="text-3xl font-bold text-yellow-600">5</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-2">New Announcements</h3>
                    <p className="text-3xl font-bold text-red-600">2</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Employee List</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                        <tr>
                            <th className="px-4 py-2 text-left border-b">Employee Name</th>
                            <th className="px-4 py-2 text-left border-b">Position</th>
                            <th className="px-4 py-2 text-left border-b">Department</th>
                            <th className="px-4 py-2 text-left border-b">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="px-4 py-2 border-b">John Doe</td>
                            <td className="px-4 py-2 border-b">Software Engineer</td>
                            <td className="px-4 py-2 border-b">IT</td>
                            <td className="px-4 py-2 border-b text-green-600">Active</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Asset List</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                        <tr>
                            <th className="px-4 py-2 text-left border-b">Asset Name</th>
                            <th className="px-4 py-2 text-left border-b">Location</th>
                            <th className="px-4 py-2 text-left border-b">Assigned to</th>   
                            <th className="px-4 py-2 text-left border-b">Status</th>
                            <th className="px-4 py-2 text-left border-b">Expiration Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="px-4 py-2 border-b">Macbook Air</td>
                            <td className="px-4 py-2 border-b">Home Office</td>
                            <td className="px-4 py-2 border-b">John Doe</td>
                            <td className="px-4 py-2 border-b text-green-600">Available</td>
                            <td className="px-4 py-2 border-b text-blue-600">01/01/2026</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Create Custumize List for Any Event</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                        <tr>
                            <th className="px-4 py-2 text-left border-b">Number of participant</th>
                            <th className="px-4 py-2 text-left border-b">Location</th>
                            <th className="px-4 py-2 text-left border-b">Project Leader</th>   
                            <th className="px-4 py-2 text-left border-b">Status</th>
                            <th className="px-4 py-2 text-left border-b">Co-sponsor</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="px-4 py-2 border-b">Macbook Air</td>
                            <td className="px-4 py-2 border-b">Washington DC</td>
                            <td className="px-4 py-2 border-b">John Doe</td>
                            <td className="px-4 py-2 border-b text-green-600">Upcoming</td>
                            <td className="px-4 py-2 border-b text-blue-600">Adidas</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Latest Announcements</h3>
                <div className="space-y-4">
                <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="text-md font-semibold">Announcements</h4>
                    <p className="text-sm text-gray-600">We are sharing our anouncements description in this section</p>
                </div>
                
                </div>
            </div>
        </div>
    );
}
export default HomeComponent;