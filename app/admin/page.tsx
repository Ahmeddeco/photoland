import { currentUser } from '@clerk/nextjs/server'

export default async function AdminPage() {
	const user = await currentUser()
	if (user) {
		return (
			<section className=' h-full min-h-dvh'>
				<h1 className=''>{user?.firstName}</h1>
				<h2>Admin Dashboard</h2>
			</section>
		)
	}
}
