import GradientText from '@/components/global/gradient-text';
import { Button } from '@/components/ui/button';
import { BadgePlus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CallToAction = () => {
    return (
        <section className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-0">
            <GradientText
                className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold text-center"
                element="H1"
            >
                Learning Communities
            </GradientText>
            <h2 className="text-2xl text-yellow-200">On Demand</h2>
            <p className="text-sm lg:py-6 md:py-4 sm:py-0 md:text-center text-left text-muted-foreground">
                Empower your learning journey through collaboration with others.
            </p>
            <section className="flex md:flex-row flex-col md:justify-center gap-5 md:mt-5 w-full">
                <Button
                    variant="outline"
                    className="rounded-xl bg-transparent text-base"
                >
                    Watch Demo
                </Button>
                <Link href="/sign-in">
                    <Button className="rounded-xl text-base flex gap-2 w-full">
                        <BadgePlus /> Get Started
                    </Button>
                </Link>
            </section>
        </section>
    );
};

export default CallToAction;
