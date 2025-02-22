import Form from 'next/form'
import { IoSearch } from 'react-icons/io5'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

type SearchBarTypes = {
	onPress?: () => void
}

const SearchBar = ({ onPress }: SearchBarTypes) => {
	const delay = () => {
		setTimeout(() => {
			if (onPress) {
				onPress()
			}
		}, 300)
	}
	return (
		<>
			<Form
				action={'/search'}
				className=' w-full h-auto flex lg:flex-row flex-col gap-2 items-center justify-center'
			>
				<Input
					name='product'
					type='text'
					placeholder='Search for a product'
					className='h-full w-full lg:w-4/5'
					
				/>
				<Button
					className='lg:flex hidden items-center justify-center w-1/5'
					type='submit'
				>
					<IoSearch className='text-zinc-900 text-4xl font-black' />
				</Button>

				{/* mobile btn */}
				<Button
					className='flex lg:hidden items-center justify-center '
					type='submit'
					onClick={delay}
				>
					<IoSearch className='text-zinc-900 text-2xl font-bold' />
				</Button>
			</Form>
		</>
	)
}

export default SearchBar
