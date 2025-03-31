import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center py-10 h-16 bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg">
            <div className="flex gap-6 bg-gray-800 px-6 py-2 rounded-full shadow-lg">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-5 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${isActive
                            ? "bg-red-500 text-white shadow-md scale-105"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/add-schedule"
                    className={({ isActive }) =>
                        `px-5 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${isActive
                            ? "bg-red-500 text-white shadow-md scale-105"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`
                    }
                >
                    Add Schedule
                </NavLink>

                <NavLink
                    to="/all-schedule"
                    className={({ isActive }) =>
                        `px-5 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${isActive
                            ? "bg-red-500 text-white shadow-md scale-105"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`
                    }
                >
                    All Schedule
                </NavLink>

                <NavLink
                    to="/sign-up"
                    className={({ isActive }) =>
                        `px-5 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${isActive
                            ? "bg-red-500 text-white shadow-md scale-105"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`
                    }
                >
                    Sign Up
                </NavLink>

                <NavLink
                    to="/sign-in"
                    className={({ isActive }) =>
                        `px-5 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${isActive
                            ? "bg-red-500 text-white shadow-md scale-105"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`
                    }
                >
                    Sign In
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
