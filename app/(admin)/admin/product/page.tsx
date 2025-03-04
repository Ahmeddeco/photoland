import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function ProductPage() {
	const products = await prisma.product.findMany()

	return (
		<section>
			<Link href={'/admin/product/add'} className=''>
				<Button>add product</Button>
			</Link>
			<h1 className='uppercase py-4'>all products are</h1>
			{products?.map(({ title, id, description, imageUrl }) => (
				<Card key={id} className='w-96 py-12'>
					<CardContent>
						{imageUrl[0] !== '' ? (
							<h4>no image</h4>
						) : (
							<Image
								src={imageUrl[0]}
								alt={title}
								width={400}
								height={400}
								className='rounded-lg'
							/>
						)}
						<h2 key={id}>{title}</h2>
						<p>{description}</p>
					</CardContent>
				</Card>
			))}
		</section>
	)
}
