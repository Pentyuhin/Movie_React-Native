import {FC} from 'react'
import {Control} from 'react-hook-form'

import {Field} from '@/components/ui/form-elements/field/Field'

import {validEmail} from '@/shared/regex'
import {IAuthFormData} from '@/shared/types/auth.interface'

interface IAuthFields {
	control: Control<IAuthFormData>
	isPassRequired?: boolean
}

export const AuthFields: FC<IAuthFields> = ({ control, isPassRequired }) => {
	return (
		<>
			<Field<IAuthFormData>
				placeholder='Enter email'
				control={control}
				name='email'
				rules={{
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				}}
				keyboardType='email-address'
			/>

			<Field<IAuthFormData>
				placeholder='Enter password'
				control={control}
				name='password'
				secureTextEntry
				rules={
					isPassRequired
						? {
								required: 'password is required!',
								minLength: {
									value: 6,
									message: 'Please should be minimum 6 characters long'
								}
						  }
						: {}
				}
			/>
		</>
	)
}
