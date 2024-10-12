'use client';

import React from 'react';
import DesktopMenu from './desktop-menu';
import MobileMenu from './mobile-menu';

type Props = { orientation: 'desktop' | 'mobile' };

const NavMenu = ({ orientation }: Props) => {
    switch (orientation) {
        case 'desktop':
            return <DesktopMenu />;
        case 'mobile':
            return <MobileMenu />;
        default:
            return <div></div>;
    }
};

export default NavMenu;
