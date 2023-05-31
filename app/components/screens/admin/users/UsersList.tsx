import { FC } from 'react'

import { Layout } from '@/components/ui/Layout'
import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'

export const UsersList: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='UserList' />
		</Layout>
	)
}
