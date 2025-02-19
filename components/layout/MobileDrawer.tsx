import { AlignJustify } from 'lucide-react'
import { categories } from '@/constants/categories'
import Link from 'next/link'
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
							<DrawerHeader className='flex flex-col gap-1 uppercase bg-primary text-default font-bold'>
								category
							</DrawerHeader>
							<DrawerBody>
								<div className='my-12 flex flex-col gap-8' onClick={onClose}>
									<SearchBar />
									<CategoriesNavLinks />
								</div>
							</DrawerBody>
							<DrawerFooter>
								<Logo />
							</DrawerFooter>
						</>
					)}
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default MobileDrawer
