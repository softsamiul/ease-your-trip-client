import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center banner">

                <h2 className="md:text-7xl text-3xl font-extrabold text-white capitalize">Life is either a daring adventure or nothing at all</h2>
                <NavLink to="/services">
                    <button className="text-2xl font-medium bg-white text-black mt-6 py-1 px-4 rounder-circle">Explore Now</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Banner;