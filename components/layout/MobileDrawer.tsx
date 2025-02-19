import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AlignJustify } from 'lucide-react'
import { categories } from '@/constants/categories'
import Link from 'next/link'
import SearchBar from './SearchBar'

const MobileDrawer = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost' size={'icon'}>
					<AlignJustify
						size={36}
						strokeWidth={2.5}
						className='dark:text-primary text-foreground'
					/>
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className='uppercase'>categories</SheetTitle>
				</SheetHeader>
				{/* content */}
				<div className='my-12 flex flex-col gap-8'>
					<SearchBar />
					<div className='flex flex-col gap-8 uppercase '>
						{categories.map(({ href, title }) => (
							<SheetClose asChild key={href}>
								<Link type='submit' href={`/category/${href}`}>
									{title}
								</Link>
							</SheetClose>
						))}
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button type='submit'>Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default MobileDrawer
