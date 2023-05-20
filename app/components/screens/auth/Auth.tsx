import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import { AuthFields } from '@/components/screens/auth/AuthFields'
import { Loader } from '@/components/ui/Loader'
import { Button } from '@/components/ui/button/Button'
import { DismissKeyboard } from '@/components/ui/form-elements/field/DismissKeyboard'

import { IAuthInterfaceData } from '@/shared/types/auth.interface'

export const Auth: FC = props => {
	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, control } = useForm<IAuthInterfaceData>({
		mode: 'onChange'
	})
	const onSubmit: SubmitHandler<IAuthInterfaceData> = ({ email, password }) => {
		console.log(email, password)
	}
	const isLoading = false
	return (
		<DismissKeyboard className='bg-[#090909]'>
			<View className='mx-2 items-center justify-center h-full'>
				<View className='w-9/12'>
					<Text className='text-center text-white text-4xl fort-bolt mb-2.5'>
						{isReg ? 'Register' : 'Login'}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<AuthFields control={control} isPassRequired />

							<Button onPress={handleSubmit(onSubmit)} icon={'film'}>
								Go to watch
							</Button>
							<Pressable onPress={() => setIsReg(!isReg)}>
								<Text className='text-white opacity-30 text-right text-base mt-3'>
									{isReg ? 'Login' : 'Register'}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</DismissKeyboard>
	)
}
