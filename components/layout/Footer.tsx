'use client'

import { socialIcons } from '@/constants/SocialIcons'
import SearchBar from './SearchBar'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from '../ui/card'

const Footer = () => {
	return (
		<footer>
			<Card className='bg-default min-h-64 h-auto mt-16 py-16 w-screen shadow-lg '>
				<CardContent className='container flex flex-col items-center justify-center text-center gap-8 max-w-4xl'>
					<h4 className='uppercase'>subscribe to our newsletter</h4>
					<h5 className='text-content4'>
						be the first to get the latest news about trends, promotions and
						much more!
					</h5>
					<SearchBar />
					<div className='flex items-center justify-center gap-8 lg:gap-16  text-2xl'>
						{socialIcons.map(({ href, icon }) => (
							<Link
								href={href}
								key={href}
								target='_blank '
								className='hover:text-primary transition-all'
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
