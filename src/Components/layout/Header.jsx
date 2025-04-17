import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className="bg-gray-800 text-white px-3">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">NiksFlix</div>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-gray-300">About</NavLink>
            </li>
            <li>
              <NavLink to="/movie" className="hover:text-gray-300">Movie</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink>
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