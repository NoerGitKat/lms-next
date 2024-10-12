import Image from 'next/image';

const LandingSnippet = () => {
    return (
        <section className="relative py-14">
            <div className="w-full h-3/6 absolute rounded-[50%] radial--blur opacity-40 mx-10" />
            <div className="w-full aspect-video relative">
                <Image
                    priority
                    src="/snippet.png"
                    className="opacity-[0.5] object-contain"
                    alt="Dashboard Screenshot"
                    height={800}
                    width={800}
                />
            </div>
        </section>
    );
};

export default LandingSnippet;
