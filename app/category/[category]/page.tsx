import CategoriesAside from '@/components/layout/home/CategoriesAside'

export default async function CategoryPage({
	params,
}: {
	params: Promise<{ category: string }>
}) {
	const category = (await params).category

	return (
		<>
			<h2>{`CategoryPage ${category}`}</h2>
		</>
	)
}
