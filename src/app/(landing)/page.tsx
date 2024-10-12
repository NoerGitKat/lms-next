import dynamic from 'next/dynamic';
import CallToAction from './_components/call-to-action';
import LandingSnippet from './_components/snippet';

const DynamicPricing = dynamic(
    () =>
        import('./_components/pricing').then((component) => component.Pricing),
    { ssr: true },
);

export default function Home() {
    return (
        <main className="md:px-10 py-20 flex flex-col items-center gap-36">
            <section>
                <CallToAction />
                <LandingSnippet />
            </section>
            <DynamicPricing />
        </main>
    );
}
