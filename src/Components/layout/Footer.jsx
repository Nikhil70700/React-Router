import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-gray-300">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">NiksFlix</h3>
                            <p className="mb-4">Creating amazing experiences since 2010. We're dedicated to providing the best service to our customers.</p>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" className="hover:text-white">
                                   
                                </a>
                                <a href="https://twitter.com" className="hover:text-white">
                                   
                                </a>
                                <a href="https://instagram.com" className="hover:text-white">
                                   
                                </a>
                            </div>
                        </div>                       
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <NavLink to="/faq" className="hover:text-white transition duration-300">FAQ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/support" className="hover:text-white transition duration-300">Support</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/terms" className="hover:text-white transition duration-300">Terms of Service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/careers" className="hover:text-white transition duration-300">Careers</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    {/* <MapPin size={16} className="mr-2" /> */}
                                    <span>123 Business Ave, City, ST 12345</span>
                                </li>
                                <li className="flex items-center">
                                    {/* <Phone size={16} className="mr-2" /> */}
                                    <span>(555) 123-4567</span>
                                </li>
                                <li className="flex items-center">
                                    {/* <Mail size={16} className="mr-2" /> */}
                                    <span>contact@company.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 py-4">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm mb-2 md:mb-0">
                            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                        </div>
                        <div className="flex space-x-4 text-sm">
                            <NavLink to="/privacy-policy" className="hover:text-white">Privacy Policy</NavLink>
                            <NavLink to="/terms" className="hover:text-white">Terms of Service</NavLink>
                            <NavLink to="/sitemap" className="hover:text-white">Sitemap</NavLink>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer