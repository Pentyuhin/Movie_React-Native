import { adminRoutes } from '@/navigation/admin.routes'
import { IRoute } from '@/navigation/navigation.types'

import { Favorites } from '@/components/screens/favorites/Favorites'
import { Genre } from '@/components/screens/genre/Genre'
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
		name: 'Favorites',
		component: Favorites
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
	// {
	// 	name: 'Screen404',
	// 	component: Screen404
	// },
	{
		name: 'Genre',
		component: Genre
	},
	{
		name: 'Actor',
		component: Actor
	},
	{
		name: 'Movie',
		component: Movie
	}
]

export const routes = [...userRoutes, ...adminRoutes]
