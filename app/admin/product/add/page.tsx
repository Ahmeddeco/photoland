'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { CategoryEnum } from '@/enum/categoryEnum'
import { manufactureEnum } from '@/enum/manufactureEnum'
import { SellerEnum } from '@/enum/sellerEnum'
import { addProductAction } from '@/functions/productActions'
import { ProductSchema } from '@/schemas/productSchema'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { useActionState } from 'react'
import { useEffect, useState } from 'react'

export default function AddProductPage() {
	const [lastResult, action] = useActionState(addProductAction, undefined)

	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ProductSchema })
		},

		shouldValidate: 'onBlur',
		shouldRevalidate: 'onInput',
	})

	// Enums

	const [manufactureDb, setManufactureDb] = useState<
		{ id: string; title: string }[]
	>([])

	const [categoryDb, setCategoryDb] = useState<{ id: string; title: string }[]>(
		[]
	)

	const [sellerDb, setSellerDb] = useState<{ id: string; title: string }[]>([])

	useEffect(() => {
		manufactureEnum().then((data) => setManufactureDb(data))
	}, [])
	useEffect(() => {
		CategoryEnum().then((data) => setCategoryDb(data))
	}, [])
	useEffect(() => {
		SellerEnum().then((data) => setSellerDb(data))
	}, [])

	return (
		<form
			className='flex flex-col  gap-6 min-h-screen'
			id={form.id}
			onSubmit={form.onSubmit}
			action={action}
		>
			{/* Title */}
			<div className='flex flex-col gap-2'>
				<Label className='capitalize' htmlFor='Title'>
					Title
				</Label>
				<Input
					type='text'
					key={fields.title.key}
					name={fields.title.name}
					defaultValue={fields.title.initialValue}
					id='title'
					placeholder='Title'
				/>
				<p className='text-destructive'>{fields.title.errors}</p>
			</div>
			{/* Description */}
			<div className='flex flex-col gap-2'>
				<Label className='capitalize' htmlFor='description'>
					Description
				</Label>
				<Textarea
					key={fields.description.key}
					name={fields.description.name}
					defaultValue={fields.description.initialValue}
					id='description'
					placeholder='Description'
				/>
				<p className='text-destructive'>{fields.description.errors}</p>
			</div>
			{/* Model */}
			<div className='flex flex-col gap-2'>
				<Label className='capitalize' htmlFor='model'>
					Model
				</Label>
				<Input
					type='text'
					key={fields.model.key}
					name={fields.model.name}
					defaultValue={fields.model.initialValue}
					id='model'
					placeholder='Model'
				/>
				<p className='text-destructive'>{fields.model.errors}</p>
			</div>
			{/* imageUrls */}
			<div className='flex flex-col gap-2'>
				<Label className='capitalize' htmlFor='url'>
					Images Url
				</Label>
				<Input
					type='url'
					key={fields.imageUrls.key}
					name={fields.imageUrls.name}
					defaultValue={
						Array.isArray(fields.imageUrls.initialValue)
							? fields.imageUrls.initialValue.join(', ')
							: fields.imageUrls.initialValue
					}
					id='imageUrls'
					placeholder='imageUrls'
				/>
				<p className='text-destructive'>{fields.imageUrls.errors}</p>
			</div>
			{/* Price */}
			<div className='flex flex-col gap-2'>
				<Label className='capitalize' htmlFor='price'>
					Price
				</Label>
				<Input
					type='number'
					key={fields.price.key}
					name={fields.price.name}
					defaultValue={fields.price.initialValue}
					id='price'
					placeholder='Price'
				/>
				<p className='text-destructive'>{fields.price.errors}</p>
			</div>
			{/* Discount */}
			<div className='flex flex-col gap-2'>
				<Label className='capitalize' htmlFor='discount'>
					Discount
				</Label>
				<Input
					type='number'
					key={fields.discount.key}
					name={fields.discount.name}
					defaultValue={fields.discount.initialValue}
					id='price'
					placeholder='Discount'
				/>
				<p className='text-destructive'>{fields.discount.errors}</p>
			</div>
			{/* Is New ? */}
			<div className='flex flex-col gap-2'>
				<Label className='capitalize' htmlFor='isNew'>
					Is New ?
				</Label>
				<Switch
					key={fields.isNew.key}
					name={fields.isNew.name}
					defaultValue={fields.isNew.initialValue}
					id='price'
				/>
				<p className='text-destructive'>{fields.isNew.errors}</p>
			</div>
			{/* manufactureId */}
			<div className='flex flex-col gap-2'>
				<Label className='capitalize' htmlFor='manufactureId'>
					manufactureId
				</Label>
				<Select
					name={fields.manufactureId.name}
					key={fields.manufactureId.key}
					defaultValue={fields.manufactureId.initialValue}
				>
					<SelectTrigger>
						<SelectValue placeholder='Manufacture' />
					</SelectTrigger>
					<SelectContent>
						{manufactureDb.map(({ id, title }) => (
							<SelectItem value={id} key={id}>
								{title}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<p className='text-destructive'>{fields.manufactureId.errors}</p>
			</div>
			{/* categoryId */}
			<div className='flex flex-col gap-2'>
				<Label className='capitalize' htmlFor='categoryId'>
					Category
				</Label>
				<Select
					name={fields.categoryId.name}
					key={fields.categoryId.key}
					defaultValue={fields.categoryId.initialValue}
				>
					<SelectTrigger>
						<SelectValue placeholder='Category' />
					</SelectTrigger>
					<SelectContent>
						{categoryDb.map(({ id, title }) => (
							<SelectItem value={id} key={id}>
								{title}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<p className='text-destructive'>{fields.categoryId.errors}</p>
			</div>
			{/* sellerId */}
			<div className='flex flex-col gap-2'>
				<Label className='capitalize' htmlFor='manufactureId'>
					Seller
				</Label>
				<Select
					name={fields.sellerId.name}
					key={fields.sellerId.key}
					defaultValue={fields.sellerId.initialValue}
				>
					<SelectTrigger>
						<SelectValue placeholder='Seller' />
					</SelectTrigger>
					<SelectContent>
						{sellerDb.map(({ id, title }) => (
							<SelectItem value={id} key={id}>
								{title}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<p className='text-destructive'>{fields.sellerId.errors}</p>
			</div>

			<Button type='submit'>Add Product</Button>
		</form>
	)
}
