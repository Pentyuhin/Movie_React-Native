import { FC } from 'react'

import { useFavorites } from '@/components/screens/favorites/useFavorites'
import { Layout } from '@/components/ui/Layout'
import { Loader } from '@/components/ui/Loader'
import { MovieCatalog } from '@/components/ui/movie/catalog/MovieCatalog'

export const Favorites: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites()

	if (isLoading) return <Loader />
	return (
		<Layout isHasPadding>
			<MovieCatalog title='Favorites' movies={favoriteMovies} />
		</Layout>
	)
}
