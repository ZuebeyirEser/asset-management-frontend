import React from 'react';
import logo from './logo.png';

const InputField = ({ type, placeholder, icon }) => (
  <div className="relative flex items-center mt-4">
    <span className="absolute">
      {icon}
    </span>
    <input
      type={type}
      className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      placeholder={placeholder}
    />
  </div>
);

const SignInComponent = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
          <img className="w-auto h-7 sm:h-8" src={logo} alt="logo" />

          <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
            Sign In
          </h1>

          <InputField
            type="email"
            placeholder="Email address"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          />

          <InputField
            type="password"
            placeholder="Password"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            }
          />

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign in
            </button>

            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
              or sign in with
            </p>

            <button
              className="flex items-center justify-center w-full px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                {/* SVG paths here */}
              </svg>
              <span className="mx-2">Sign in with Google</span>
            </button>

            <div className="mt-6 text-center">
              <a
                href="/register"
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Don’t have an account yet? Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignInComponent;
