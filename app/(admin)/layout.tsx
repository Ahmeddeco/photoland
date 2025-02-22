import AsideBar from '@/components/layout/admin/AsideBar'
import MobileAdminDrawer from '@/components/layout/admin/MobileAdminDrawer'

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		// <div
		// 	className='flex items-center justify-between gap-8 relative'
		// 	suppressHydrationWarning
		// >
		<div className='flex justify-between gap-16 relative'>
			<aside className='hidden  lg:w-2/12 lg:block '>
				<AsideBar />
				<MobileAdminDrawer />
			</aside>
			<main className='lg:w-10/12 w-full min-h-screen'>{children}</main>
		</div>
		// </div>
	)
}
