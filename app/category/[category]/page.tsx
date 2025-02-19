export default async function CategoryPage({
	params,
}: {
	params: Promise<{ category: string }>
}) {
	const category = (await params).category.toString()
	console.log(category)

	return <main>CategoryPage ${category}</main>
}
