import { ModeToggle } from '@/components/theme/themeToggle'
import React from 'react'
import Logo from './Logo'

const Navbar = () => {
	return (
		<header className='fixed flex items-center justify-between container w-full top-0 right-0 left-0 h-20 bg-muted'>
			<Logo />
			<ModeToggle />
		</header>
	)
}

export default Navbar
