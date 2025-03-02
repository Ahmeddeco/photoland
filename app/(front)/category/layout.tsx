import CategoriesAside from '@/components/layout/home/CategoriesAside'

export default function CategoryLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex gap'>
			<aside className='w-2/12 h-[600px]'>
				<CategoriesAside />
			</aside>
			<main className='w-10/12'>{children}</main>
		</div>
	)
}
