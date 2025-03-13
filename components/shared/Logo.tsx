import Link from 'next/link'
import React from 'react'

const Logo = () => {
	return (
		<Link href={'/'}>
			<h1 className='uppercase text-2xl lg:text-3xl font-bold lg:font-extrabold'>
				photo<span className='text-primary'>land</span>
			</h1>
		</Link>
	)
}

export default Logo
