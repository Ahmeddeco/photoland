import { currentUser } from '@clerk/nextjs/server'

export default async function AdminPage() {
	const user = await currentUser()
	if (!user) {
		return <div className=''>Not signed in</div>
	}
	console.log(user?.fullName)

	return (
		<section className='w-full lg:w-3/4 h-full  bg-blue-500/50  min-h-dvh'>
			<div className=''>{user?.hasImage}</div>
		</section>
	)
}
