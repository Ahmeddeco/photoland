export default function ProductPage({
	params,
}: {
	params: { productId: string }
}) {
	const productId = params.productId
	return (
		<main>
			<h1>Welcome to Productpage!{productId}</h1>
		</main>
	)
}
