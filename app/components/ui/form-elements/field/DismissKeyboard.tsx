import { FC, PropsWithChildren } from 'react'
import {
	Keyboard,
	TouchableNativeFeedback,
	View,
	ViewProps
} from 'react-native'

export const DismissKeyboard: FC<PropsWithChildren<ViewProps>> = ({
	children,
	...rest
}) => {
	return (
		<TouchableNativeFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View
				style={{
					flex: 1
				}}
				{...rest}
			>
				{children}
			</View>
		</TouchableNativeFeedback>
	)
}
