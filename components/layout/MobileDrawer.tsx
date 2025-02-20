import { AlignJustify } from 'lucide-react'
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

const MobileDrawer = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<Button onPress={onOpen} variant='light' size='sm' isIconOnly>
				<AlignJustify size={28} strokeWidth={2} />
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
