import React from 'react'
import MainCard from './MainCard'

const HeroSection = () => {
	return (
		<section className='flex flex-col md:flex-row items-center justify-between gap h-[555px]'>
			{/* left aside */}
			<aside className='md:w-3/12 w-full h-full md:block hidden bg-blue-400'>
				aside
			</aside>
			{/* main */}
			<div className='md:w-6/12 w-full h-full'>
				<MainCard />
			</div>
			{/* right */}
			<div className='md:w-3/12 w-full h-full bg-yellow-400'>right</div>
		</section>
	)
}

export default HeroSection
