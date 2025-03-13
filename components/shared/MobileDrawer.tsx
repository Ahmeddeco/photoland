import SearchBar from './SearchBar'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTrigger,
	SheetTitle,
	SheetClose,
} from '@/components/ui/sheet'

import Logo from './Logo'
import CategoriesNavLinks from './CategoriesNavLinks'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

const MobileDrawer = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu size={32} strokeWidth={2.5} />
			</SheetTrigger>
			<SheetContent className='flex flex-col justify-between '>
				<SheetHeader className='uppercase'>
					<SheetTitle>category</SheetTitle>
				</SheetHeader>
				<div className='my-12'>
					<CategoriesNavLinks />
				</div>
				<SheetFooter className='flex flex-col justify-between items-center gap'>
					<SearchBar />
					<Button asChild>
						<Logo />
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default MobileDrawer
