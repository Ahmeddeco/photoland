import { auth, currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs'
import Logo from './Logo'
import SearchBar from './SearchBar'
import MobileDrawer from './MobileDrawer'
import ThemeSwitcher from '../themes/ThemeSwitcher'

const Navbar = async () => {
	// const { userId } = await auth()

	// if (!userId) {
	// 	return <div className=''>Sign in to view this page</div>
	// }
	// const user = await currentUser()

	return (
		<header className=' fixed top-0 right-0 left-0 py-2 md:py-4 bg-default '>
			<nav className='container md:flex items-center justify-between gap hidden'>
				{/* Logo */}
				<div className=' w-3/12'>
					<Logo />
				</div>
				<div className='w-6/12'>
					{/* SearchBar */}
					<SearchBar />
				</div>

				{/* ThemeSwitcher & Auth */}
				<div className='flex items-center justify-end gap-2 md:gap-4 w-3/12'>
					<ThemeSwitcher />

					<>
						<SignedOut>
							<SignInButton />
							<SignUpButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</>
				</div>
			</nav>

			{/* Mobile Nav */}
			<nav className='md:hidden flex items-center justify-between container'>
				<Logo />
				<div className='flex items-center justify-center '>
					<ThemeSwitcher />
					<MobileDrawer />
				</div>
			</nav>
		</header>
	)
}

export default Navbar
