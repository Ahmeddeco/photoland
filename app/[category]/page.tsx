import CategoriesAside from '@/components/layout/home/CategoriesAside'

export default async function CategoryPage({
	params,
}: {
	params: Promise<{ category: string }>
}) {
	const category = (await params).category

	return (
		<div className='flex gap-16'>
			<aside className='hidden lg:block'>
				<CategoriesAside />
			</aside>
			<main>{`CategoryPage ${category}`}</main>
		</div>
	)
}
