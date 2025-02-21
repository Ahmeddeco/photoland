'use client'

import { adminLinks } from '@/constants/admin'
import { Card, CardBody, CardHeader } from '@heroui/card'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AsideBar = () => {
	const pathName = usePathname()
	console.log(pathName)

	return (
		<aside className='hidden lg:flex lg:w-1/4 min-h-screen '>
			<Card className='w-full h-full bg-default'>
				{/* CardHeader */}
				<CardHeader className='uppercase  text-zinc-900 font-bold bg-primary '>
					admin dashboard
				</CardHeader>
				{/* CardBody */}
				<CardBody className='pt-6 flex flex-col gap-6'>
					{adminLinks.map(({ href, title }) => (
						<Link
							href={`/admin/${href}`}
							key={href}
							className={`${
								pathName === `/admin/${href}` ? 'text-primary' : ''
							} uppercase  text-xl `}
						>
							{title}
						</Link>
					))}
				</CardBody>
			</Card>
		</aside>
	)
}

export default AsideBar
