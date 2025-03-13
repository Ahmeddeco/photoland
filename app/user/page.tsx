'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CreateUser } from '@/functions/userAction'
import { useActionState } from 'react'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { loginSchema } from '@/lib/zodSchema'

export default function UserPage() {
	const [lastResult, action] = useActionState(CreateUser, undefined)

	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: loginSchema })
		},

		shouldValidate: 'onBlur',
		shouldRevalidate: 'onInput',
	})

	return (
		<div className='h-screen flex flex-col items-center justify-center'>
			<Card className='mx-auto max-w-sm'>
				<CardHeader>
					<CardTitle>Sign Up</CardTitle>
				</CardHeader>
				<CardContent>
					<form
						className='grid gap-4 my-8'
						id={form.id}
						onSubmit={form.onSubmit}
						action={action}
					>
						<div className='grid grid-cols-2 gap-4'>
							<div className='grid gap-2'>
								<Label htmlFor='first-name'>First Name</Label>
								<Input
									key={fields.firstName.key}
									name={fields.firstName.name}
									defaultValue={fields.firstName.initialValue}
									id='first-name'
									placeholder='Ahmed'
								/>
								<p className='text-destructive'>{fields.firstName.errors}</p>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='last-name'>Last Name</Label>
								<Input
									key={fields.lastName.key}
									name={fields.lastName.name}
									defaultValue={fields.lastName.initialValue}
									id='last-name'
									placeholder='Mohamed'
								/>
								<p className='text-destructive'>{fields.lastName.errors}</p>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									key={fields.email.key}
									name={fields.email.name}
									defaultValue={fields.email.initialValue}
									id='email'
									placeholder='ahmed@mail.com'
									type='email'
								/>
								<p className='text-destructive'>{fields.email.errors}</p>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='password'>Password</Label>
								<Input
									key={fields.password.key}
									name={fields.password.name}
									defaultValue={fields.password.initialValue}
									id='password'
									placeholder='Max'
									type='password'
								/>
								<p className='text-destructive'>{fields.password.errors}</p>
							</div>
						</div>
						<Button type='submit' className='w-full'>
							Submit
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
