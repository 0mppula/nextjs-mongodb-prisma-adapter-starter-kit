import Nav from '@/components/Nav';
import Providers from '@/components/providers';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
	style: ['normal'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={(cn(inter.className), 'antialiased')}>
				<Providers>
					<Nav />

					<main className="pt-10 lg:pt-16 flex flex-col min-h-[calc(100svh-3.5rem-2px)] max-w-6xl items-center mx-auto px-6 md:px-8 pb-32">
						{children}

						<Toaster />
					</main>
				</Providers>
			</body>
		</html>
	);
}
