import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default async function ProductPage() {
	const products = await prisma.product.findMany()
	console.log(products)

	return (
		<section>
			<h1 className='uppercase'>
				products are{' '}
				{products?.map(({ title, id, description, imageUrl, isNew }) => (
					<Card key={id} className='w-96 py-12'>
						<CardContent>
							<Image
								src={imageUrl[0]}
								alt={title}
								width={400}
								height={400}
								className='rounded-lg'
							/>
							<h1 key={id}>{title}</h1>
							<p>{description}</p>
						</CardContent>
					</Card>
				))}
			</h1>
		</section>
	)
}
