import {FC} from 'react'
import {Image, Pressable, Text, View} from 'react-native'
import {AuthService} from "@/services/auth.service";
import {useAuth} from "@/hooks/useAuth";
import {AntDesign} from '@expo/vector-icons'
import {useProfile} from "@/components/screens/profile/useProfile";
import {useForm} from "react-hook-form";
import {IAuthFormData} from "@/shared/types/auth.interface";
import {Loader} from "@/components/ui/Loader";
import {AuthFields} from "@/components/screens/auth/AuthFields";
import {Button} from "@/components/ui/button/Button";
import {Heading} from "@/components/ui/heading/Heading";
import {useScaleOnMount} from "@/hooks/useScaleOnMount";
import Animated from 'react-native-reanimated';
import {Layout} from "@/components/ui/Layout";


export const Profile: FC = () => {

	const {setUser} = useAuth()

	const {handleSubmit, setValue , control} = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const {isLoading, onSubmit} = useProfile(setValue)

	const { styleAnimation } = useScaleOnMount()

	return (
		<Layout isHasPadding>
			<Heading title='Profile' />

			<Animated.View
				style={styleAnimation}
				className='my-6 items-center justify-center'
			>
				<Image
					source={require('./avatar-guest.jpg')}
					className='w-40 h-40 rounded-2xl'
				/>
			</Animated.View>

			{isLoading ? (
				<Loader />
			) : (
				<View className='mb-10'>
					<AuthFields control={control} />
					<Button onPress={handleSubmit(onSubmit)} icon={'edit'}>
						Update profile
					</Button>
				</View>
			)}

			<Pressable
				onPress={() => AuthService.logout().then(() => setUser(null))}
				className='opacity-40 items-center flex-row justify-end'
			>
				<AntDesign name={'logout'} size={18} color='white' />
				<Text className='text-white text-lg ml-2'>Logout</Text>
			</Pressable>

		</Layout>
	)
}
