import SearchBar from './SearchBar'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTrigger,
} from '@/components/ui/sheet'

import Logo from './Logo'
import CategoriesNavLinks from './CategoriesNavLinks'
import { FaBars } from 'react-icons/fa6'

const MobileDrawer = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<FaBars className='text-2xl' />
			</SheetTrigger>

			<SheetContent>
				<SheetHeader className='uppercase'>category</SheetHeader>

				<div className='my-8'>
					<CategoriesNavLinks />
				</div>
				<SearchBar />

				<SheetFooter className=' '>
					<Logo />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default MobileDrawer
