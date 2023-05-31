import { FC, useRef } from 'react'
import { Animated } from 'react-native'

import { MovieBackground } from '@/components/movie/MovieBackground'
import { MovieHeader } from '@/components/movie/MovieHeader'
import { MovieInfo } from '@/components/movie/movie-content/MovieInfo'
import { useMovie } from '@/components/movie/useMovie'
import { useUpdateCountOpened } from '@/components/movie/useUpdateCountOpened'
import { Layout } from '@/components/ui/Layout'
import { Loader } from '@/components/ui/Loader'

export const Movie: FC = () => {
	const y = useRef(new Animated.Value(0)).current

	const { movie, isLoading } = useMovie()

	useUpdateCountOpened()

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} y={y} />
			<MovieBackground movie={movie} y={y} />
			<MovieInfo movie={movie} y={y} />
		</Layout>
	)
}
