import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { extractRouterConfig } from 'uploadthing/server'
import { ourFileRouter } from '@/app/api/uploadthing/core'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { ThemeProvider } from '@/components/themes/theme-provider'
import localFont from 'next/font/local'

const expo2 = localFont({
	src: '../public/fonts/Exo2-VariableFont_wght.ttf',
	display: 'swap',
	variable: '--expo-2',
})

export const metadata: Metadata = {
	title: 'Photo Land',
	description: 'A camera store for proffissionals',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
				variables: {
					colorBackground: '#2a2b31',
					fontSize: 'xl',
					colorPrimary: '#F6CC44',
					colorInputText: '#F6CC44',
				},
				layout: {
					socialButtonsPlacement: 'bottom',
					socialButtonsVariant: 'blockButton',
				},
			}}
		>
			<html lang='en' suppressHydrationWarning>
				<body className={`${expo2.className} antialiased  text-foreground `}>
					<ThemeProvider
						attribute='class'
						defaultTheme='light'
						enableSystem
						disableTransitionOnChange
					>
						<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
						<Navbar />
						<main className='min-h-dvh h-auto container lg:mt-28 mt-20'>
							{children}
						</main>
						<Footer />
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
