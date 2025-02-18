import { prisma } from '@/lib/prisma'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
	const db = await prisma.product.findMany()
	console.log(db)

	return (
		<>
			<h1>Welcome to Homepage!</h1>
			<div className=''>
				{db.map((product) => (
					<div key={product.id} className=''>
						<h2>{product.title}</h2>
						<p>{product.description}</p>
						<div className='relative size-96 rounded-full'>
							<Image src={product.imageUrl[0]} alt={product.title} fill />
						</div>
					</div>
				))}
			</div>
		</>
	)
}
