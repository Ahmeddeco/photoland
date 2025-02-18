import AsidBar from '@/components/layout/admin/AsidBar'
import MainForm from '@/components/layout/admin/MainForm'

export default async function AdminPage() {
	return (
		<div className=''>
			<div className=''>
				<h1>Welcome to Adminpage!</h1>
			</div>
			<section className='flex items-center justify-between gap min-h-dvh '>
				<AsidBar />
				<MainForm />
			</section>
		</div>
	)
}
