import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.props = {
            
        }
    }
    render() {
        return (
            <div>
                <header className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                    <h1 className="text-4xl font-extrabold text-white tracking-wide">
                        Employee Management System
                     </h1>
                    <p className="mt-3 text-lg text-white opacity-90">
                        Seamlessly manage your team's data with ease and efficiency
                    </p>
                    <div className="mt-5">
                        <button className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-full shadow hover:bg-gray-100 transition ease-in-out duration-300">
                            Get Started
                        </button>
                    </div>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;