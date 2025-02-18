import Link from 'next/link'
import React from 'react'

const Logo = () => {
	return (
		<Link href={'/'}>
			<h1 className='uppercase text-lg md:text-3xl font-semibold lg:font-extrabold'>
				photo<span className='dark:text-primary text-yellow-500'>land</span>
			</h1>
		</Link>
	)
}

export default Logo
