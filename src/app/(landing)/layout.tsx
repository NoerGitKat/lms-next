import React from 'react';
import LandingNavbar from './_components/navbar';

type Props = {
    children: React.ReactNode;
};

function LandingLayout({ children }: Props) {
    return (
        <main className="flex flex-col container relative">
            <LandingNavbar />
            {children}
        </main>
    );
}

export default LandingLayout;
