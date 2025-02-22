import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa6'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'

const ThemeSwitcher = () => {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={'outline'} size={'icon'}>
					<FaSun className=' rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-xl' />
					<FaMoon className='absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100  text-2xl' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem onClick={() => setTheme('light')} key={'light'}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')} key={'dark'}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')} key={'system'}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
export default ThemeSwitcher
