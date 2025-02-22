import { FaBars } from 'react-icons/fa6'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'

const MobileAdminDrawer = () => {
	return (
		<div className='lg:hidden block  bottom-16 right-16 fixed'>
			<Sheet>
				<SheetTrigger>Open</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Are you absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	)
}

export default MobileAdminDrawer
