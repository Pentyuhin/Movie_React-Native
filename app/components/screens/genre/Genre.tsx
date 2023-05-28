import { FC } from 'react'

import { useGenre } from '@/components/screens/genre/useGenre'
import { Layout } from '@/components/ui/Layout'
import { Loader } from '@/components/ui/Loader'
import { NotFound } from '@/components/ui/NotFound'
import { MovieCatalog } from '@/components/ui/movie/catalog/MovieCatalog'

export const Genre: FC = () => {
	const { movies, isLoading, genre } = useGenre()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{genre ? (
				<MovieCatalog
					title={genre.name}
					movies={movies}
					description={genre.description}
					isBackButton
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	)
}
