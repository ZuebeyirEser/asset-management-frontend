import React from 'react';

const HeaderComponent = () => {

    return (
        <div>
            <header className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-extrabold text-white tracking-wide">
                    Employee Management System
                </h1>
                <p className="mt-3 text-lg text-white opacity-90">
                    Seamlessly manage your team's data with ease and efficiency
                </p>
                <div>
                <button 
                type="submit" 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
                    Register
                </button>
                <button 
                type="submit" 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
                    Log-in
                </button>
            </div>
            </header>

        </div>
        );
};


export default HeaderComponent;