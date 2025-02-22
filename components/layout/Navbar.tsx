'use client'

// import { auth, currentUser } from '@clerk/nextjs/server'
// import Image from 'next/image'
// import {
// 	SignedIn,
// 	SignedOut,
// 	SignInButton,
// 	SignUpButton,
// 	UserButton,
// } from '@clerk/nextjs'
import Logo from './Logo'
import SearchBar from './SearchBar'
import MobileDrawer from './MobileDrawer'
import ThemeSwitcher from '../themes/ThemeSwitcher'
import UserAuth from './UserAuth'

const Navbar = () => {
	// const { userId } = await auth()

	// if (!userId) {
	// 	return <div className=''>Sign in to view this page</div>
	// }
	// const user = await currentUser()

	return (
		<header className='lg:h-20 h-auto fixed top-0 right-0 left-0 lg:py-4 py-2 bg-background/95 z-50 shadow-lg'>
			<nav className='container lg:flex items-center justify-between hidden'>
				{/* Logo */}
				<div className=' w-2/12'>
					<Logo />
				</div>
				<div className='w-7/12'>
					{/* SearchBar */}
					<SearchBar />
				</div>

				{/* ThemeSwitcher & Auth */}
				<div className='flex items-center justify-end gap-2 lg:gap-4 w-3/12'>
					<ThemeSwitcher />
					<UserAuth />
				</div>
			</nav>

			{/* Mobile Nav */}
			<nav className='lg:hidden flex items-center justify-between container'>
				<Logo />
				<div className='flex items-center justify-center gap-4 '>
					<ThemeSwitcher />
					<UserAuth />
					<MobileDrawer />
				</div>
			</nav>
		</header>
	)
}

export default Navbar
