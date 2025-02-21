import AsideBar from '@/components/layout/admin/AsideBar'
import MobileAdminDrawer from '@/components/layout/admin/MobileAdminDrawer'

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main
			className='flex items-center justify-between gap-8 '
			suppressHydrationWarning
		>
			<AsideBar />
			<MobileAdminDrawer />
			{children}
		</main>
	)
}
