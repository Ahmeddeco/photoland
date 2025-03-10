import Image from 'next/image'
import heroImg from '@/public/images/heroImage.png'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const MainCard = () => {
	return (
		<Card className='dark:bg-hero bg-cover bg-muted bg-right-top lg:h-full h-auto flex lg:flex-row flex-col-reverse items-center justify-center px-4 lg:px-8 py-12 rounded-lg'>
			{/* Text */}
			<CardContent className=' h-full flex-col flex items-start justify-center flex-1 gap'>
				<div className='flex flex-col '>
					<p className='uppercase'>special offer</p>
					<h2 className='uppercase'>save 20% on your first order</h2>
				</div>
				<Button>Shop now</Button>
			</CardContent>
			{/* Image */}
			<div className='h-full flex-1 w-full flex items-center justify-center '>
				<Image
					src={heroImg}
					alt={'heroImg'}
					className='scale-125 lg:scale-150'
				/>
			</div>
		</Card>
	)
}

export default MainCard
