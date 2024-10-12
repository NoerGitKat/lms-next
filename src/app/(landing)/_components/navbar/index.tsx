import React from 'react';
import NavMenu from './menu';

const LandingNavbar = () => {
    return (
        <nav className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
            <p className="font-bold text-2xl">LMS By Noer.</p>
            <NavMenu orientation="desktop" />
        </nav>
    );
};

export default LandingNavbar;
