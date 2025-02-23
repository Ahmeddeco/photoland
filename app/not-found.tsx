import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex flex-col h-screen items-center justify-center gap'>
			<h1 className=''>Not Found</h1>
			<h2>Could not find page</h2>
			<Link href='/'>
				<Button  className=''>
					Return Home
				</Button>
			</Link>
		</div>
	)
}
