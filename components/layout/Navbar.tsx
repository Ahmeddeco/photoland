import { auth, currentUser } from '@clerk/nextjs/server'
import { ThemeSwitcher } from '../themes/ThemeSwitcher'
import Image from 'next/image'
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs'

const Navbar = async () => {
	// const { userId } = await auth()

	// if (!userId) {
	// 	return <div className=''>Sign in to view this page</div>
	// }
	// const user = await currentUser()

	return (
		<header className='container fixed top-0 right-0 left-0 flex items-center justify-between py-4'>
			<ThemeSwitcher />

			<div className='flex items-center justify-center gap-4'>
				<SignedOut>
					<SignInButton />
					<SignUpButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</header>
	)
}

export default Navbar
