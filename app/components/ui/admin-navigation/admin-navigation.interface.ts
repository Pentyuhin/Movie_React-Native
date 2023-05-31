import { TypeRootStackParamList } from '@/navigation/navigation.types'

import { TypeMaterialIconsIconNames } from '@/shared/types/icon.types'

export interface INavItem {
	icon: TypeMaterialIconsIconNames
	title: string
	routeName: keyof TypeRootStackParamList
}
