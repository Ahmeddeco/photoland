'use client'

import { Card, CardHeader, CardBody } from '@heroui/card'
import CategoriesNavLinks from '../CategoriesNavLinks'

const CategoriesAside = () => {
	return (
		<>
			<Card className='w-full h-full bg-default'>
				{/* CardHeader */}
				<CardHeader className='uppercase  text-zinc-900 font-bold bg-primary'>
					browse Categories
				</CardHeader>
				{/* CardBody */}
				<CardBody className='pt-6 flex flex-col gap-6'>
					<CategoriesNavLinks />
				</CardBody>
			</Card>
		</>
	)
}

export default CategoriesAside
