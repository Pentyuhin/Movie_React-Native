import { IRoute } from '@/navigation/navigation.types'

import { Admin } from '@/components/screens/admin/home/Admin'

export const adminRoutes: IRoute[] = [
	{
		name: 'Admin',
		component: Admin,
		isAdmin: true
	}
	// {
	// 	name: 'ActorEdit',
	// 	component: ActorEdit,
	// 	isAdmin: true
	// },
	// {
	// 	name: 'ActorList',
	// 	component: ActorList,
	// 	isAdmin: true
	// },
	// {
	// 	name: 'GenreEdit',
	// 	component: GenreEdit,
	// 	isAdmin: true
	// },
	// {
	// 	name: 'GenreList',
	// 	component: GenreList,
	// 	isAdmin: true
	// },
	// {
	// 	name: 'MovieEdit',
	// 	component: MovieEdit,
	// 	isAdmin: true
	// },
	// {
	// 	name: 'MovieList',
	// 	component: MovieList,
	// 	isAdmin: true
	// },
	// {
	// 	name: 'UserEdit',
	// 	component: UserEdit,
	// 	isAdmin: true
	// },
	// {
	// 	name: 'UserList',
	// 	component: UserList,
	// 	isAdmin: true
	// }
]
