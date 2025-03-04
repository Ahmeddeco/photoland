import { HTMLInputTypeAttribute } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

type CustomInputProps = {
	HtmlFor: string
	LabelTitle: string
	InputPlaceholder: string
	InputType: HTMLInputTypeAttribute
	Name: string
}

const CustomInput = ({
	InputPlaceholder,
	InputType = 'text',
	LabelTitle,
	HtmlFor,
	Name,
}: CustomInputProps) => {
	return (
		<div className='w-full max-w-sm'>
			<Label htmlFor={HtmlFor}>{LabelTitle}</Label>
			<Input placeholder={InputPlaceholder} type={InputType} name={Name} className="h-12"/>
		</div>
	)
}

export default CustomInput
