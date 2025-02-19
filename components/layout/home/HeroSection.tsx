import React from 'react'
import MainCard from './MainCard'
import CategoriesAside from './CategoriesAside'

const HeroSection = () => {
	return (
		<section className='flex flex-col lg:flex-row items-center justify-between gap lg:h-[555px] h-auto'>
			{/* left aside */}
			<aside className='lg:w-3/12 w-full h-full lg:block hidden '>
				<CategoriesAside />
			</aside>
			{/* main */}
			<div className='lg:w-6/12 w-full h-full'>
				<MainCard />
			</div>
			{/* right */}
			<div className='lg:w-3/12 w-full h-full bg-secondary'>right</div>
		</section>
	)
}

export default HeroSection
