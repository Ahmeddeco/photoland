import Form from 'next/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

const SearchBar = () => {
	return (
		<Form
			action={'/search'}
			className='flex items-center justify-center gap-4 h-12 '
		>
			<Input
				name='searchContent'
				type='text'
				placeholder='Search'
				className='h-full w-full'
			/>
			<Button type='submit' className='h-full'>
				<Search className='size-8' />
			</Button>
		</Form>
	)
}

export default SearchBar
