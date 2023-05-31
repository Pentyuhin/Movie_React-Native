import { FC } from 'react'
import { View } from 'react-native'

import { CountUsers } from '@/components/screens/admin/home/statistics/CountUsers'
import { PopularMovies } from '@/components/screens/admin/home/statistics/PopularMovies'

export const Statistics: FC = () => {
	return (
		<View className='flex items-stretch'>
			<CountUsers />
			<PopularMovies />
		</View>
	)
}
