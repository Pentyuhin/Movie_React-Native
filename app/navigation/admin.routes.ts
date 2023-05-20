import { IRoute } from '@/navigation/navigation.types'

import { Admin } from '@/components/screens/admin/home/Admin'

export const adminRoutes: IRoute[] = [
	{
		name: 'Admin',
		component: Admin,
		isAdmin: true
	}
]
