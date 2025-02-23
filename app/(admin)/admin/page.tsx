import { currentUser } from '@clerk/nextjs/server'

export default async function AdminPage() {
	const user = await currentUser()
	if (!user) {
		return <div className=''>Not signed in</div>
	}

	return (
		<section className=' h-full min-h-dvh'>
			<h1 className=''>{user?.fullName}</h1>
			<h2>Admin Dashboard</h2>
		</section>
	)
}
