'use client'

import Link from 'next/link'
import CategoriesNavLinks from '../CategoriesNavLinks'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const CategoriesAside = () => {
	return (
		<>
			<Card className='w-full h-full '>
				{/* CardHeader */}
				<CardHeader>browse Categories</CardHeader>
				{/* CardBody */}
				<CardContent className='pt-6 flex flex-col gap-6'>
					<CategoriesNavLinks />
				</CardContent>
			</Card>
		</>
	)
}

export default CategoriesAside
