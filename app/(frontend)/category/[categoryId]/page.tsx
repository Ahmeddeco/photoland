export default async function CategoryPage({
	params,
}: {
	params: Promise<{ categoryId: string }>
}) {
	const Category = (await params).categoryId

	return (
		<main>
			<h1>Welcome to Categorypage!{Category}</h1>
		</main>
	)
}
