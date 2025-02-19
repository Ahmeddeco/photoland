import Form from 'next/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

const SearchBar = () => {
	return (
		<>
			<Form
				action={'/search'}
				className='h-10 w-full flex items-center justify-center'
			>
				<Input
					name='product'
					type='text'
					placeholder='Search for a product'
					className='h-full bg-foreground text-background  md:rounded-r-none'
				/>
				<Button
					className='hidden h-full rounded-l-none w-24 md:flex items-center justify-center'
					type='submit'
				>
					<Search size={32} strokeWidth={2.5} />
				</Button>
			</Form>
		</>
	)
}

export default SearchBar
