import SearchBar from './SearchBar'
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	Button,
	useDisclosure,
} from '@heroui/react'
import Logo from './Logo'
import CategoriesNavLinks from './CategoriesNavLinks'
import { FaBars } from 'react-icons/fa6'

const MobileDrawer = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<Button onPress={onOpen} variant='light' size='sm' isIconOnly>
				<FaBars className='text-2xl'/>
			</Button>

			<Drawer
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size='xs'
				backdrop='blur'
			>
				<DrawerContent>
					{(onClose) => (
						<>
							<DrawerHeader className='flex flex-col gap-1 uppercase bg-primary text-zinc-900 font-semibold'>
								category
							</DrawerHeader>
							<DrawerBody>
								<div className='my-8' onClick={onClose}>
									<CategoriesNavLinks />
								</div>
								<SearchBar onPress={onClose} />
							</DrawerBody>
							<DrawerFooter className=' '>
								<Logo/>
							</DrawerFooter>
						</>
					)}
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default MobileDrawer
