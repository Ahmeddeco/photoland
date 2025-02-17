export default async function Page({
	// params,
	searchParams,
}: {
	// params: Promise<{ paramId: string }>
	searchParams: Promise<{ searchContent: string }>
}) {
	// const paramId = (await params).paramId
	const searchContent = (await searchParams).searchContent
	return <main>search {searchContent}</main>
}
