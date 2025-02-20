import { Button } from '@heroui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex flex-col h-screen items-center justify-center gap-8'>
			<h1 className=''>Not Found</h1>
			<h2>Could not find page</h2>
			<Link href='/'>
				<Button color='primary' size='lg' className='text-zinc-900 font-bold'>
					Return Home
				</Button>
			</Link>
		</div>
	)
}
