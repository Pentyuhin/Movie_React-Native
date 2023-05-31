import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { View } from 'react-native'
import Animated from 'react-native-reanimated'

import { STYLE_BLOCK } from '@/components/screens/admin/home/statistics/styleBlok'
import { Loader } from '@/components/ui/Loader'

import { useScaleOnMount } from '@/hooks/useScaleOnMount'

import { AdminService } from '@/services/api/admin.service'

export const CountUsers: FC = () => {
	const { isLoading, data } = useQuery([], () => AdminService.getCountUsers())

	const { styleAnimation } = useScaleOnMount()
	return (
		<View className={`items-center justify-center ${STYLE_BLOCK}`}>
			{isLoading ? (
				<Loader />
			) : (
				<Animated.Text
					className='text-7xl mb-1 font-medium text-white'
					style={styleAnimation}
				>
					{data}
				</Animated.Text>
			)}
			<Animated.Text
				className='opacity-70 text-xl text-white'
				style={styleAnimation}
			>
				users
			</Animated.Text>
		</View>
	)
}
