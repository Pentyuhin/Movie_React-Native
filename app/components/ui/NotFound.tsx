import { FC } from 'react'
import { View } from 'react-native'

import { Heading } from '@/components/ui/heading/Heading'

export const NotFound: FC = () => {
	return (
		<View>
			<Heading title='404 - Page not Found' />
		</View>
	)
}
