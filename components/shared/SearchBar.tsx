import Form from 'next/form'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

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
		<Form
			action={'/search'}
			className=' w-full  flex lg:flex-row flex-col gap-4 items-center justify-center h-auto'
		>
			<Input
				name='product'
				type='text'
				placeholder='Search for a product'
				className='h-full w-full lg:w-5/6 min-h-12'
			/>
			<Button className='h-full lg:w-1/6 w-full min-h-12' type='submit'>
				<Search />
			</Button>
		</Form>
	)
}

export default SearchBar
