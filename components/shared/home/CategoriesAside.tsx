'use client'

import Link from 'next/link'
import CategoriesNavLinks from '../CategoriesNavLinks'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

const CategoriesAside = () => {
	return (
		<>
			<Card className='w-full h-full '>
				{/* CardHeader */}
				<CardHeader>browse Categories</CardHeader>
				{/* CardBody */}
				<CardContent className=' pt-6 flex flex-col justify-between'>
					<CategoriesNavLinks />
				</CardContent>
			</Card>
		</>
	)
}

export default CategoriesAside
