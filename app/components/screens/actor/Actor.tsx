import { FC } from 'react'

import { useActor } from '@/components/screens/actor/useActor'
import { Layout } from '@/components/ui/Layout'
import { Loader } from '@/components/ui/Loader'
import { NotFound } from '@/components/ui/NotFound'
import { MovieCatalog } from '@/components/ui/movie/catalog/MovieCatalog'

export const Actor: FC = () => {
	const { isLoading, movies, actor } = useActor()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{actor ? (
				<MovieCatalog title={actor.name} movies={movies} isBackButton />
			) : (
				<NotFound />
			)}
		</Layout>
	)
}
