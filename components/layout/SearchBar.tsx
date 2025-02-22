import Form from 'next/form'
import { IoSearch } from 'react-icons/io5'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

type SearchBarTypes = {
	onPress?: () => void
}

const SearchBar = ({ onPress }: SearchBarTypes) => {
	// const delay = () => {
	// 	setTimeout(() => {
	// 		if (onPress) {
	// 			onPress()
	// 		}
	// 	}, 300)
	// }
	return (
		<>
			<Form
				action={'/search'}
				className=' w-full lg:h-12 min-h-12 flex lg:flex-row flex-col gap-2 items-center justify-center'
			>
				<Input
					name='product'
					type='text'
					placeholder='Search for a product'
					className='h-full w-full lg:w-4/5'
				/>
				<Button className='h-full lg:w-1/5 w-full' type='submit'>
					<IoSearch className='text-zinc-900  font-black' />
				</Button>
			</Form>
		</>
	)
}

export default SearchBar
