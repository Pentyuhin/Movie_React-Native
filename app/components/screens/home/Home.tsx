import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

export const Home: FC = props => {
	const { navigate } = useTypedNavigation()
	return (
		<View className={'mt-20'}>
			<Text>Home</Text>
			<Pressable onPress={() => navigate('Auth')}>
				<Text style={{ color: 'white' }}>Go to Auth</Text>
			</Pressable>
		</View>
	)
}
