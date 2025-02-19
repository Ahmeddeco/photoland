import Form from 'next/form'
import { Search } from 'lucide-react'
import { Button, Input } from '@heroui/react'

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
				className=' w-full flex md:flex-row flex-col md:gap-4 items-center justify-center'
			>
				<Input
					name='product'
					type='text'
					placeholder='Search for a product'
					className='h-full'
					color='primary'
					variant='bordered'
					size='md'
					radius='md'
				/>
				<Button
					className='md:flex hidden items-center justify-center'
					type='submit'
					variant='solid'
					color='primary'
					size='md'
					radius='md'
				>
					<Search size={28} strokeWidth={2} className='text-background' />
				</Button>

				{/* mobile btn */}
				<Button
					className='flex md:hidden  items-center justify-center h-16'
					type='submit'
					variant='solid'
					color='primary'
					fullWidth
					onPress={delay}
				>
					<Search size={28} strokeWidth={2} className='text-background' />
				</Button>
			</Form>
		</>
	)
}

export default SearchBar
