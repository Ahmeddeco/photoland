export default async function SearchPage({
	searchParams,
}: {
	searchParams: Promise<{ product: string }>
}) {
	const product = (await searchParams).product.toString()

	return (
		<main>
			<h1>{product}</h1>
		</main>
	)
}
