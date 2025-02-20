import { heroSideRight } from '@/constants/HeroSideRight'
import { Button } from '@heroui/button'
import Image from 'next/image'

const SideCard = () => {
	return (
		<div className='flex flex-col gap-4 lg:gap-8 lg:h-full h-auto '>
			{heroSideRight.map(({ title, image }, i) => (
				<div
					className=' bg-default rounded-lg h-full w-full flex lg:flex-row flex-col-reverse lg:items-center lg:justify-between justify-center shadow-lg '
					key={i}
				>
					{/* text & button */}
					<div className='w-1/2 lg:pl-4 p-4 flex flex-col gap-4'>
						<h5 className='font-semibold uppercase'>{title}</h5>
						<Button
							className='uppercase text-zinc-900 font-semibold'
							color='primary'
							variant='solid'
							size='lg'
						>
							shop now
						</Button>
					</div>

					{/* Image */}
					<div className=' w-full h-full flex lg:items-center justify-end '>
						<Image src={image} alt={title} />
					</div>
				</div>
			))}
		</div>
	)
}

export default SideCard
