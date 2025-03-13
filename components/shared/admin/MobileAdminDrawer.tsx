'use client'

import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { adminLinks } from '@/constants/admin'
import { Menu, Shield } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '../Logo'
import SearchBar from '../SearchBar'
import { Button } from '@/components/ui/button'

const MobileAdminDrawer = () => {
	const pathName = usePathname()

	return (
		<Sheet>
			<SheetTrigger>
				<Button
					size={'icon'}
					variant='default'
					className='rounded-full flex items-center justify-center'
					asChild
				>
					<Shield />
				</Button>
			</SheetTrigger>
			<SheetContent className='flex flex-col justify-between '>
				<SheetHeader>
					<SheetTitle className='uppercase'>admin dashboard</SheetTitle>
				</SheetHeader>
				<div className='flex flex-col gap pt-6'>
					{adminLinks.map(({ href, title }) => (
						<Link
							href={`/admin/${href}`}
							key={href}
							className={`${
								pathName === `/admin/${href}` ? 'text-primary  ' : ''
							} uppercase`}
						>
							{title}
						</Link>
					))}
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

export default MobileAdminDrawer
