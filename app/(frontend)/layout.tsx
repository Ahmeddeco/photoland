import CategoriesBar from '@/components/project/layout/CategoriesBar'

export default function FrontLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className='flex items-start py-12 justify-between gap-8 h-screen mt-20 '>
			<div className='w-2/12'>
				<CategoriesBar />
			</div>
			<div className='w-10/12'>{children}</div>
		</main>
	)
}
