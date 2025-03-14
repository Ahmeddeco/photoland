import { categories } from '@/constants/categories'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const CategoriesNavLinks = () => {
	const pathName = usePathname()

	return (
		<div className='flex flex-col gap uppercase '>
			{categories.map(({ href, title }) => (
				<Link
					href={`/category/${href}`}
					key={href}
					className={` ${
						pathName === `/category/${href}` ? 'text-primary' : ''
					}`}
				>
					{title}
				</Link>
			))}
		</div>
	)
}

export default CategoriesNavLinks
