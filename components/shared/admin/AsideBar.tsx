'use client'

import { adminLinks } from '@/constants/admin'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const AsideBar = () => {
	const pathName = usePathname()

	return (
		<>
			<Card>
				{/* CardHeader */}
				<CardHeader>
					<CardTitle className=''>admin dashboard</CardTitle>
				</CardHeader>
				{/* CardBody */}
				<CardContent className='pt-6 flex flex-col gap'>
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
				</CardContent>
				{/* CardFooter */}
			</Card>
		</>
	)
}

export default AsideBar
