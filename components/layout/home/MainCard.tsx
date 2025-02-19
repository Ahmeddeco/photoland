import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card'
import Image from 'next/image'
import heroImg from '@/public/images/heroImage.png'
import { Button } from '@heroui/button'

const MainCard = () => {
	return (
		<div className='dark:bg-hero bg-gradient-to-tr from-default to-background bg-cover bg-right-top lg:h-full h-auto flex lg:flex-row flex-col-reverse items-center justify-center px-4 lg:px-8 py-12 rounded-lg'>
			{/* Text */}
			<div className=' h-full flex-col flex items-start justify-center flex-1 gap-4 lg:gap-8'>
				<div className='flex flex-col '>
					<p className='uppercase'>special offer</p>
					<h2 className='uppercase'>save 20% on your first order</h2>
				</div>
				<Button
					className='uppercase text-zinc-900 font-bold '
					variant='shadow'
					color='primary'
					size='lg'
				>
					Shop now
				</Button>
			</div>
			{/* Image */}
			<div className='h-full flex-1 w-full '>
				<Image
					src={heroImg}
					alt={'heroImg'}
					className='scale-125 lg:scale-150'
				/>
			</div>
		</div>
	)
}

export default MainCard
