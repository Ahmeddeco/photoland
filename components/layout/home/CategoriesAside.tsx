'use client'

import CategoriesNavLinks from '../CategoriesNavLinks'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const CategoriesAside = () => {
	return (
		<>
			<Card className='w-full h-full bg-default'>
				{/* CardHeader */}
				<CardHeader className='uppercase  text-zinc-900 font-bold bg-primary'>
					browse Categories
				</CardHeader>
				{/* CardBody */}
				<CardContent className='pt-6 flex flex-col gap-6'>
					<CategoriesNavLinks />
				</CardContent>
			</Card>
		</>
	)
}

export default CategoriesAside
