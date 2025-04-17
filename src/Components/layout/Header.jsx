import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {


    return (
        <>
            <header className="bg-gray-800 text-white px-3">
                <nav className="container mx-auto flex items-center justify-between p-4">
                    <div className=" text-3xl font-extrabold text-blue-400">NiksFlix</div>
                    <div className="flex items-center space-x-6">
                        <ul className="flex space-x-6">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "text-green-400" : "hover:text-blue-300"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-400" : "hover:text-blue-300"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/movie" className={({ isActive }) => isActive ? "text-green-400" : "hover:text-blue-300"}>Movie</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-400" : "hover:text-blue-300"}>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="flex space-x-4">
                            <NavLink
                                to="/signin"
                                className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-800"
                            >
                                Sign In
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 text-white"
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header