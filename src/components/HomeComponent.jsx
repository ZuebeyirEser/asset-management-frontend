import React from 'react';

// StatsCard Component
const StatsCard = ({ title, value, color }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className={`text-3xl font-bold ${color}`}>{value}</p>
        </div>
    );
};

// Table Component
const Table = ({ headers, data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-4 py-2 text-left border-b">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-4 py-2 border-b">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Announcement Component
const Announcement = ({ title, description }) => (
    <div className="p-4 bg-gray-100 rounded-lg">
        <h4 className="text-md font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

// HomeComponent
const HomeComponent = () => {
    const employeeListHeaders = ['Employee Name', 'Position', 'Department', 'Status'];
    const employeeListData = [
        ['John Doe', 'Software Engineer', 'IT', <span className="text-green-600">Active</span>],
    ];

    const assetListHeaders = ['Asset Name', 'Location', 'Assigned to', 'Status', 'Expiration Date'];
    const assetListData = [
        ['Macbook Air', 'Home Office', 'John Doe', <span className="text-green-600">Available</span>, '01/01/2026'],
    ];

    const customizeListHeaders = ['Number of Participant', 'Location', 'Project Leader', 'Status', 'Co-sponsor'];
    const customizeListData = [
        ['50', 'Washington DC', 'John Doe', <span className="text-green-600">Upcoming</span>, 'Adidas'],
    ];

    return (
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-2">Welcome to the Employment Management System</h2>
                <p className="text-gray-600">Manage your employees, tasks, assets and more from one place.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard title="Total Employees" value="120" color="text-blue-600" />
                <StatsCard title="Active Tasks" value="35" color="text-green-600" />
                <StatsCard title="Upcoming Meetings" value="5" color="text-yellow-600" />
                <StatsCard title="New Announcements" value="2" color="text-red-600" />
            </div>

            {/* Employee List */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Employee List</h3>
                <Table headers={employeeListHeaders} data={employeeListData} />
            </div>

            {/* Asset List */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Asset List</h3>
                <Table headers={assetListHeaders} data={assetListData} />
            </div>

            {/* Customize List */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Create Customize List for Any Event</h3>
                <Table headers={customizeListHeaders} data={customizeListData} />
            </div>

            {/* Latest Announcements */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Latest Announcements</h3>
                <div className="space-y-4">
                    <Announcement
                        title="Announcements"
                        description="We are sharing our announcements description in this section."
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;
