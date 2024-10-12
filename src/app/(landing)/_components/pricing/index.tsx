import BackdropGradient from '@/components/global/backdrop-gradient';
import GradientText from '@/components/global/gradient-text';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';

export const Pricing = () => {
    return (
        <div
            className="w-full pt-20 flex flex-col items-center gap-3"
            id="pricing"
        >
            <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
                <GradientText
                    className="text-4xl font-semibold text-center"
                    element="H2"
                >
                    Pricing Plans
                </GradientText>
                <p className="text-sm md:text-center text-left text-muted-foreground">
                    Every community has their own needs.
                </p>
            </BackdropGradient>
            <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
                <section className="flex flex-col gap-2">
                    <CardTitle>€99 / month</CardTitle>
                    <CardDescription className="text-[#B4B0AE]">
                        For smaller communities.
                    </CardDescription>
                    <Link href="#" className="w-full mt-3">
                        <Button
                            variant="default"
                            className="bg-[#333337] w-full rounded-2xl text-white hover:text-[#333337]"
                        >
                            Start for free
                        </Button>
                    </Link>
                </section>
                <section className="flex flex-col gap-2 text-[#B4B0AE] mt-5">
                    <p>Features</p>
                    <span className="flex gap-2 mt-3 items-center">
                        <CheckIcon />
                        Feature number 1
                    </span>
                    <span className="flex gap-2 items-center">
                        <CheckIcon />
                        Feature number 2
                    </span>
                    <span className="flex gap-2 items-center">
                        <CheckIcon />
                        Feature number 3
                    </span>
                    <span className="flex gap-2 items-center">
                        <CheckIcon />
                        Feature number 4
                    </span>
                    <span className="flex gap-2 items-center">
                        <CheckIcon />
                        Feature number 5
                    </span>
                </section>
            </Card>
        </div>
    );
};
