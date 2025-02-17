'use client'

import { ThemeSwitcher } from '../themes/ThemeSwitcher'
import { Button } from '@heroui/react'
import { UploadThing } from './UploadThing'

const Navbar = () => {
	return (
		<header className=''>
			<div className=''>
				<ThemeSwitcher />
				<UploadThing />
			</div>
		</header>
	)
}

export default Navbar
