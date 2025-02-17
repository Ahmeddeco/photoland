import { CategoryLink } from '@/constants/categoryLink'
import Link from 'next/link'
import React from 'react'

const CategoriesBar = () => {
	return (
		<aside className='hidden lg:flex flex-col h-[600px]'>
			<h2 className='bg-yellow-400 text-gray-950 h-12 text-center text-lg font-semibold uppercase flex items-center justify-center rounded-t-lg'>
				browse categories
			</h2>
			<div className='text-foreground flex flex-col gap-8 uppercase p-4 '>
				{CategoryLink.map(({ href, title }, id) => (
					<Link key={id} href={href}>
						{title}
					</Link>
				))}
			</div>
		</aside>
	)
}

export default CategoriesBar
