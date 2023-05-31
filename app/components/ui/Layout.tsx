import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Platform, SafeAreaView, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ILayout {
	className?: string
	style?: ViewStyle
	isHasPadding?: boolean
}

function AdminButton() {
	return null
}

export const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	style,
	isHasPadding,
	className
}) => {
	const { top } = useSafeAreaInsets()
	return (
		<SafeAreaView className='flex-1'>
			<View
				className={cn('pt-5 flex-1', className, { 'px-5': isHasPadding })}
				style={{
					paddingTop: Platform.OS === 'ios' ? top / 2 : top * 1.7,
					...style
				}}
			>
				{children}
			</View>
			<AdminButton />
		</SafeAreaView>
	)
}
