import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { ManufactureSchema } from '@/schemas/manufactureSchema'

import Form from 'next/form'

export default async function NextformPage() {
	const manuf = await Manufa()
	console.log(manuf)

	return (
		<Form action={manufactureForm}>
			<Label>Manufacture</Label>
			<Select name='manufacture'>
				<SelectTrigger className='w-[180px]'>
					<SelectValue placeholder='Manufacture' />
				</SelectTrigger>
				<SelectContent>
					{manuf.map(({ id, name }) => (
						<SelectItem value={id} key={id} id={id}>
							{name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<Button type='submit'>Send</Button>
		</Form>
	)
}
