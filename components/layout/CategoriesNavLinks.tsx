import { categories } from '@/constants/categories'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const CategoriesNavLinks = () => {
	const pathName = usePathname()

	return (
		<div className='flex flex-col gap-8 uppercase '>
			{categories.map(({ href, title }) => (
				<Link
					href={href}
					key={href}
					className={`uppercase font-semibold ${
						pathName === href && 'text-primary'
					}`}
				>
					{title}
				</Link>
			))}
		</div>
	)
}

export default CategoriesNavLinks
