
'use client'

import { ThemeSwitcher } from '../themes/ThemeSwitcher'
import { Button } from '@heroui/react'

const Navbar = () => {
	return (
		<header className=''>
			<div className=''>
				<ThemeSwitcher />
			</div>
			<Button color='primary'>click me</Button>
		</header>
	)
}

export default Navbar
