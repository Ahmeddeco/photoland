import CustomInput from '@/components/admin/CustomInput'
import SubmitButton from '@/components/admin/SubmitButton'
import { addProduct } from '@/functions/productAction'
import Form from 'next/form'

export default async function AddPage() {
	return (
		<Form action={addProduct} className='flex flex-col w-full gap-8'>
			<div className='grid xl:grid-cols-2 grid-cols-1 gap-4'>
				<div className='w-full max-w-sm'>
					<CustomInput
						HtmlFor={'title'}
						LabelTitle={'title'}
						InputPlaceholder={'title'}
						InputType='text'
						Name={'title'}
					/>
				</div>
				<div className='w-full max-w-sm'>
					<CustomInput
						HtmlFor={'description'}
						LabelTitle={'description'}
						InputPlaceholder={'description'}
						InputType='text'
						Name={'description'}
					/>
				</div>
				<div className='w-full max-w-sm'>
					<CustomInput
						HtmlFor={'model'}
						LabelTitle={'model'}
						InputPlaceholder={'model'}
						InputType='text'
						Name={'model'}
					/>
				</div>
				<div className='w-full max-w-sm'>
					<CustomInput
						HtmlFor={'price'}
						LabelTitle={'price'}
						InputPlaceholder={'price'}
						InputType='number'
						Name={'price'}
					/>
				</div>
				<div className='w-full max-w-sm'>
					<CustomInput
						HtmlFor={'discount'}
						LabelTitle={'discount'}
						InputPlaceholder={'discount'}
						InputType='number'
						Name={'discount'}
					/>
				</div>
				<div className='w-full max-w-sm'>
					<CustomInput
						HtmlFor={'isNew'}
						LabelTitle={'isNew'}
						InputPlaceholder={'isNew'}
						InputType='checkbox'
						Name={'isNew'}
					/>
				</div>
				<div className='w-full max-w-sm'>
					<CustomInput
						HtmlFor={'manufacture'}
						LabelTitle={'manufacture'}
						InputPlaceholder={'manufacture'}
						InputType='text'
						Name={'manufactureId'}
					/>
				</div>
				<div className='w-full max-w-sm'>
					<CustomInput
						HtmlFor={'category'}
						LabelTitle={'category'}
						InputPlaceholder={'category'}
						InputType='text'
						Name={'categoryId'}
					/>
				</div>
				<div className='w-full max-w-sm'>
					<CustomInput
						HtmlFor={'seller'}
						LabelTitle={'seller'}
						InputPlaceholder={'seller'}
						InputType='text'
						Name={'sellerId'}
					/>
				</div>
			</div>
			<div className='max-w-sm'>
				<SubmitButton />
			</div>
		</Form>
	)
}
