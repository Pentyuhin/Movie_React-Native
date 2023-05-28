import { FC } from 'react'

import { MovieBackground } from '@/components/movie/MovieBackground'
import { MovieHeader } from '@/components/movie/MovieHeader'
import { MovieInfo } from '@/components/movie/MovieInfo'
import { useMovie } from '@/components/movie/useMovie'
import { Layout } from '@/components/ui/Layout'
import { Loader } from '@/components/ui/Loader'

export const Movie: FC = () => {
	const { movie, isLoading } = useMovie()

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} />
			<MovieBackground movie={movie} />
			<MovieInfo movie={movie} />
		</Layout>
	)
}
