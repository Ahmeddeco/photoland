import { SignUp } from '@clerk/nextjs'

export default function Page() {
	return (
		<section className='flex items-center justify-center min-h-dvh'>
			<SignUp />
		</section>
	)
}
