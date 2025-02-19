import { categories } from '@/constants/categories'
import Link from 'next/link'
import { Card, CardHeader, CardBody } from '@heroui/card'

const CategoriesAside = () => {
	return (
		<>
			<Card className='w-full h-full bg-default'>
				{/* CardHeader */}
				<CardHeader className='uppercase text-center text-zinc-900 font-bold bg-primary'>
					browse Categories
				</CardHeader>

				{/* CardBody */}
				<CardBody className='pt-6 flex flex-col gap-6'>
					{categories.map(({ href, title }) => (
						<Link
							href={`category/${href}`}
							key={href}
							className='uppercase font-semibold text-lg'
						>
							{title}
						</Link>
					))}
				</CardBody>
			</Card>
		</>
	)
}

export default CategoriesAside
