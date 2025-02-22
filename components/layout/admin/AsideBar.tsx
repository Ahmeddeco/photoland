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
					<CardTitle className='uppercase bg-danger text-xl font-bold'>
						admin dashboard
					</CardTitle>
				</CardHeader>
				{/* CardBody */}
				<CardContent className='pt-6 flex flex-col gap-6 '>
					{adminLinks.map(({ href, title }) => (
						<Link
							href={`/admin/${href}`}
							key={href}
							className={`${
								pathName === `/admin/${href}` ? 'text-danger' : ''
							} uppercase font-bold text-lg`}
						>
							{title}
						</Link>
					))}
				</CardContent>
				{/* CardFooter */}
				<CardFooter>
					<Link
						href={'/admin'}
						className={`text-xl font-semibold  ${
							pathName === '/admin' && 'text-danger'
						}`}
					>
						Admin
					</Link>
				</CardFooter>
			</Card>
		</>
	)
}

export default AsideBar
