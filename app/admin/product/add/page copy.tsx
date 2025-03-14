'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { addProductConform } from '@/functions/productActions'
import { ProductSchema } from '@/schemas/productSchema'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import Form from 'next/form'
import { useActionState } from 'react'

export default function AddProductPage() {
	const [lastResult, action] = useActionState(addProductConform, undefined)

	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ProductSchema })
		},

		shouldValidate: 'onBlur',
		shouldRevalidate: 'onInput',
	})

	return (
		<Form
			className='space-y-6'
			id={form.id}
			onSubmit={form.onSubmit}
			action={action}
		>
			<Input
				placeholder='title'
				id='title'
				type='text'
				key={fields.title.key}
				name={fields.title.name}
				defaultValue={fields.title.initialValue}
			/>
			<p className='text-destructive'>{fields.title.errors}</p>
			<Textarea
				placeholder='description'
				id='description'
				key={fields.description.key}
				name={fields.description.name}
				defaultValue={fields.description.initialValue}
			/>
			<p className='text-destructive'>{fields.description.errors}</p>
			<Input
				placeholder='model'
				id='model'
				type='text'
				key={fields.model.key}
				name={fields.model.name}
				defaultValue={fields.model.initialValue}
			/>
			<p className='text-destructive'>{fields.model.errors}</p>
			<Input
				placeholder='imageUrl'
				id='imageUrl'
				type='url'
				key={fields.imageUrl.key}
				name={fields.imageUrl.name}
				// defaultValue={fields.imageUrl.initialValue}
			/>
			<p className='text-destructive'>{fields.imageUrl.errors}</p>
			<Input
				placeholder='price'
				id='price'
				type='number'
				key={fields.price.key}
				name={fields.price.name}
				defaultValue={fields.price.initialValue}
			/>
			<p className='text-destructive'>{fields.price.errors}</p>
			<Input
				placeholder='discount'
				id='discount'
				type='number'
				key={fields.discount.key}
				name={fields.discount.name}
				defaultValue={fields.discount.initialValue}
			/>
			<p className='text-destructive'>{fields.discount.errors}</p>
			<Switch
				id='isNew'
				key={fields.isNew.key}
				name={fields.isNew.name}
				defaultValue={fields.isNew.initialValue}
			/>
			<p className='text-destructive'>{fields.isNew.errors}</p>
			<Input
				placeholder='manufactureId'
				id='manufactureId'
				type='number'
				key={fields.manufactureId.key}
				name={fields.manufactureId.name}
				defaultValue={fields.manufactureId.initialValue}
			/>
			<p className='text-destructive'>{fields.manufactureId.errors}</p>
			<Input
				placeholder='categoryId'
				id='categoryId'
				type='number'
				key={fields.categoryId.key}
				name={fields.categoryId.name}
				defaultValue={fields.categoryId.initialValue}
			/>
			<p className='text-destructive'>{fields.categoryId.errors}</p>
			<Input
				placeholder='sellerId'
				id='sellerId'
				type='number'
				key={fields.sellerId.key}
				name={fields.sellerId.name}
				defaultValue={fields.sellerId.initialValue}
			/>
			<p className='text-destructive'>{fields.sellerId.errors}</p>

			<Button type='submit'>Add</Button>
		</Form>
	)
}
