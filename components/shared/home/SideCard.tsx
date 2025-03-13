import { Button } from '@/components/ui/button'
import { heroSideRight } from '@/constants/HeroSideRight'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const SideCard = () => {
	return (
		<div className='flex flex-col gap lg:h-full h-auto '>
			{heroSideRight.map(({ title, image }, i) => (
				<Card
					className=' rounded-lg h-full w-full flex lg:flex-row flex-col-reverse lg:items-center lg:justify-between justify-center shadow-lg '
					key={i}
				>
					{/* text & button */}
					<CardContent className='w-1/2 lg:pl-4 p-4 flex flex-col gap'>
						<h5 className='font-semibold uppercase'>{title}</h5>
						<Button>shop now</Button>
					</CardContent>

					{/* Image */}
					<div className=' w-full h-full flex lg:items-center justify-end '>
						<Image src={image} alt={title} />
					</div>
				</Card>
			))}
		</div>
	)
}

export default SideCard
