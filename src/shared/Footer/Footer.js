import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-blue-900 py-4">
            <div className=" text-white w-10/12 md:w-11/12 mx-auto"> 
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* Footer services navigation */}
                    {/* About Ease my Trip */}
                    <div className="text-left">
                        <h2 className="text-lg font-bold mb-2">EASEMYTRIP</h2>
                        <p>Ese My Trip is an Indian online travel company founded in 2021. Headquartered in Newtown, Kolkata. The company provides online travel services including flight tickets, domestic and international holiday packages, hotel reservations, rail, and bus tickets.</p>
                    </div>
                    {/* Our Services  */}
                    <div className="text-left">
                        <h3 className="text-lg font-bold mb-2 uppercase">Our Tour Packages</h3>
                        <NavLink to="/trips">
                            <div className="flex items-center cursor-pointer">
                                <i className="fas fa-chevron-circle-right mr-2"></i>
                                <p>Kolkata City Tour</p>
                            </div>
                        </NavLink>
                        <NavLink to="/trips">
                            <div className="flex items-center cursor-pointer">
                                <i className="fas fa-chevron-circle-right mr-2"></i>
                                <p>Darjeeling Hill Tour</p>
                            </div>
                        </NavLink>
                        <NavLink to="/trips">
                            <div className="flex items-center cursor-pointer">
                                <i className="fas fa-chevron-circle-right mr-2"></i>
                                <p>Cherai Beach, Coachi</p>
                            </div>
                        </NavLink>
                        <NavLink to="/trips">
                            <div className="flex items-center cursor-pointer">
                                <i className="fas fa-chevron-circle-right mr-2"></i>
                                <p>Murshidabad, Hazarduari Palace</p>
                            </div>
                        </NavLink>
                        <NavLink to="/trips">
                            <div className="flex items-center cursor-pointer">
                                <i className="fas fa-chevron-circle-right mr-2"></i>
                                <p>Gangtok, Shikim City Of Cloud Trip</p>
                            </div>
                        </NavLink>
                        <NavLink to="/trips">
                            <div className="flex items-center cursor-pointer">
                                <i className="fas fa-chevron-circle-right mr-2"></i>
                                <p>Goa Sea Beach Tour</p>
                            </div>
                        </NavLink>
                        
                    </div>
                    {/* footer navigation */}
                    <div className="text-left">
                        <h3 className="text-lg font-bold mb-2 uppercase">Navigation</h3>
                        <NavLink to="/about">
                            <div className="flex items-center cursor-pointer">
                                <i className="fas fa-chevron-right mr-2"></i>
                                <p>About</p>
                            </div>
                        </NavLink>
                        <NavLink to="/contact">
                            <div className="flex items-center cursor-pointer">
                                <i className="fas fa-chevron-right mr-2"></i>
                                <p>Contact</p>
                            </div>
                        </NavLink>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-right mr-2"></i>
                            <p>Privacy &bsp; Policy</p>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-right mr-2"></i>
                            <p>Terms &bsp; Conditions</p>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-right mr-2"></i>
                            <p>Sitemap</p>
                        </div>
                       
                    </div>
                    {/* Get in touch */}
                    <div>
                        <h3 className="text-lg font-bold mb-2 uppercase">Get in touch</h3>
                        <div className="flex items-center justify-center">
                            <i className="fab fa-facebook-square text-4xl cursor-pointer"></i>
                            <i className="fab fa-twitter-square text-4xl mx-2.5 cursor-pointer"></i>
                            <i className="fab fa-google-plus-g text-4xl cursor-pointer"></i>
                            <i className="fab fa-linkedin text-4xl ml-2.5 cursor-pointer"></i>
                        </div>
                    </div>
                </div>
                <div className="my-3">
                    <hr />
                </div>
                {/* Copyright */}
                <div >
                    <p>Made with &hearts; by <NavLink to="/home" className="author-credit">Samiul Islam </NavLink> </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;