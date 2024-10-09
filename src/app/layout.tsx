import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ReduxProvider } from '@/providers/redux/provider';
import { QueryProvider } from '@/providers/react-query/provider';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'LMS by Noer',
    description: 'A dynamic LMS to create different online courses with.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ReduxProvider>
                    <QueryProvider>{children}</QueryProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
