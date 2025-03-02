'use client'

import { socialIcons } from '@/constants/SocialIcons'
import SearchBar from './SearchBar'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from '../ui/card'

const Footer = () => {
	return (
		<footer className='w-full h-auto'>
			<Card className=' min-h-64 h-fit mt-16 py-16 w-screen shadow-lg '>
				<CardContent className='container flex flex-col items-center justify-center text-center gap max-w-4xl'>
					<div className=''>
						<h4 className='uppercase'>subscribe to our newsletter</h4>
						<p>
							be the first to get the latest news about trends, promotions and
							much more!
						</p>
					</div>
					<SearchBar />
					<div className='flex items-center justify-center gap text-2xl'>
						{socialIcons.map(({ href, icon }) => (
							<Link
								href={href}
								key={href}
								target='_blank '
								className='hover:text-primary transition-all '
							>
								{React.createElement(icon)}
							</Link>
						))}
					</div>
				</CardContent>
			</Card>
		</footer>
	)
}

export default Footer
