import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const MobileAdminDrawer = () => {
	return (
		<div className='lg:hidden block  bottom-16 right-16 fixed'>
			<Sheet>
				<SheetTrigger>
					<Menu size={32} strokeWidth={2.5} />
				</SheetTrigger>
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
