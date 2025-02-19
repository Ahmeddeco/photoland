import { Button } from '@heroui/button'
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@heroui/dropdown'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
	const { setTheme } = useTheme()

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button variant='light' size='sm' isIconOnly>
					<Sun
						size={28}
						strokeWidth={2}
						className=' rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
					/>
					<Moon
						size={28}
						strokeWidth={2}
						className='absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary'
					/>
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
