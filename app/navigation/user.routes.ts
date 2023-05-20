import { adminRoutes } from '@/navigation/admin.routes'
import { IRoute } from '@/navigation/navigation.types'

import { Auth } from '@/components/screens/auth/Auth'
import { Favorites } from '@/components/screens/favorites/Favorites'
import { Home } from '@/components/screens/home/Home'
import { Profile } from '@/components/screens/profile/Profile'
import { Search } from '@/components/screens/search/Search'
import { Trending } from '@/components/screens/trending/Trending'

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Auth',
		component: Auth
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Trending',
		component: Trending
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Favorites',
		component: Favorites
	}
]

export const routes = [...userRoutes, ...adminRoutes]
