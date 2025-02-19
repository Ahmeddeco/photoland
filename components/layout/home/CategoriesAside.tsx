import { categories } from '@/constants/categories'
import Link from 'next/link'
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card'
import { Divider } from '@heroui/divider'

const CategoriesAside = () => {
	return (
		// <>
		// 	<Card className='h-full  ' >
		// 		<CardHeader className=''>
		// 			<CardTitle className='uppercase text-center font-bold'>
		// 				browse Categories
		// 			</CardTitle>
		// 		</CardHeader>
		// 		<CardContent className='pt-6 flex flex-col gap-6'>
		// 			{categories.map(({ href, title }) => (
		// 				<Link href={`category/${href}`} key={href} className='uppercase font-semibold text-lg'>
		// 					{title}
		// 				</Link>
		// 			))}
		// 		</CardContent>
		// 	</Card>
		// </>
		<>
			{' '}
			<Card className='max-w-[400px]'>
				<CardHeader className='flex gap-3'>
					<div className='flex flex-col'>
						<p className='text-md'>HeroUI</p>
						<p className='text-small text-default-500'>heroui.com</p>
					</div>
				</CardHeader>
				<Divider />
				<CardBody>
					<p>Make beautiful websites regardless of your design experience.</p>
				</CardBody>
				<Divider />
				<CardFooter>CardFooter</CardFooter>
			</Card>
		</>
	)
}

export default CategoriesAside
