import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { routes, userRoutes } from '@/navigation/user.routes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import { Auth } from '@/components/screens/auth/Auth'

import { useAuth } from '@/hooks/useAuth'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

export const PrivateNavigator: FC = () => {
	const { user } = useAuth()

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#090909'
				}
			}}
		>
			{user ? (
				user.isAdmin ? (
					routes.map(route => <Stack.Screen key={route.name} {...route} />)
				) : (
					userRoutes.map(route => <Stack.Screen key={route.name} {...route} />)
				)
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	)
}
