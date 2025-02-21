import { Button } from '@heroui/button'
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@heroui/dropdown'

import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa6'

const ThemeSwitcher = () => {
	const { setTheme } = useTheme()

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button variant='light' size='sm' isIconOnly>
					<FaSun className=' rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-xl' />
					<FaMoon className='absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100  text-2xl' />
				</Button>
			</DropdownTrigger>
			<DropdownMenu>
				<DropdownItem onPress={() => setTheme('light')} key={'light'}>
					Light
				</DropdownItem>
				<DropdownItem onPress={() => setTheme('dark')} key={'dark'}>
					Dark
				</DropdownItem>
				<DropdownItem onPress={() => setTheme('system')} key={'system'}>
					System
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
export default ThemeSwitcher
