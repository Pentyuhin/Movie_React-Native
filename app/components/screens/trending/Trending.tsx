import { FC } from 'react'

import { useTrending } from '@/components/screens/trending/useTrending'
import { Layout } from '@/components/ui/Layout'
import { Loader } from '@/components/ui/Loader'
import { MovieCatalog } from '@/components/ui/movie/catalog/MovieCatalog'

export const Trending: FC = () => {
	const { movies, isLoading } = useTrending()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			<MovieCatalog
				title='Trending'
				movies={movies}
				description='Trending movies in
			 excellent quality: lega, safe, without ads'
			/>
		</Layout>
	)
}
