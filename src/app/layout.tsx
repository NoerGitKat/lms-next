import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ReduxProvider } from '@/providers/redux/provider';
import { QueryProvider } from '@/providers/react-query/provider';
import { ThemeProvider } from '@/components/theme';
import { ClerkProvider } from '@clerk/nextjs';

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
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        disableTransitionOnChange
                    >
                        <ReduxProvider>
                            <QueryProvider>{children}</QueryProvider>
                        </ReduxProvider>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
