import React from 'react'
import MainCard from './MainCard'
import CategoriesAside from './CategoriesAside'
import SideCard from './SideCard'

const HeroSection = () => {
	return (
		<section className='flex flex-col lg:flex-row items-center justify-between gap lg:h-[600px] h-auto'>
			{/* left aside */}
			<aside className='lg:w-2/12 w-full h-full lg:block hidden '>
				<CategoriesAside />
			</aside>
			{/* main */}
			<div className='lg:w-7/12 w-full h-full  shadow-lg'>
				<MainCard />
			</div>
			{/* right */}
			<div className='lg:w-3/12 w-full h-full  '>
				<SideCard />
			</div>
		</section>
	)
}

export default HeroSection
