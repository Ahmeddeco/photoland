import AsideBar from '@/components/shared/admin/AsideBar'
import MobileAdminDrawer from '@/components/shared/admin/MobileAdminDrawer'

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		//
		<div className='flex justify-between gap relative'>
			<aside className='hidden lg:w-2/12 lg:block '>
				<AsideBar />
			</aside>
			<aside className='lg:hidden fixed bottom-12 right-6 z-50'>
				<MobileAdminDrawer />
			</aside>
			<main className='lg:w-10/12 w-full min-h-screen'>{children}</main>
		</div>
	)
}
