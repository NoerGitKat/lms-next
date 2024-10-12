import React from 'react';
import NavMenu from './menu';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Login } from '@/icons';
import GlassSheet from '@/components/global/glass-sheet';
import { MenuIcon } from 'lucide-react';

const LandingNavbar = () => {
    return (
        <nav className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
            <p className="font-bold text-2xl">LMS By Noer.</p>
            <NavMenu orientation="desktop" />
            <section className="flex gap-2">
                <Link href="/sign-in">
                    <Button
                        variant="outline"
                        className="bg-themeBlack rounded-2l flex gap-2 border-themeGray hover:bg-themeGray"
                    >
                        <Login />
                        Login
                    </Button>
                </Link>
                <GlassSheet
                    triggerClass="lg:hidden"
                    trigger={
                        <Button
                            variant="ghost"
                            className="hover:bg-transparent"
                        >
                            <MenuIcon size="30" />
                        </Button>
                    }
                >
                    <NavMenu orientation="mobile" />
                </GlassSheet>
            </section>
        </nav>
    );
};

export default LandingNavbar;
