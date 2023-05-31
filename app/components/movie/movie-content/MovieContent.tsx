import { useScrollToTop } from '@react-navigation/native'
import { FC, useRef } from 'react'
import { Animated, ScrollView, View } from 'react-native'

import { VideoPlayer } from '@/components/movie/VideoPlayer'
import { ActorCarousel } from '@/components/movie/movie-content/ActorCarousel'
import { MovieInfo } from '@/components/movie/movie-content/MovieInfo'
import RelatedMovies from '@/components/movie/movie-content/RelatedMovies'
import { IMovieComponent } from '@/components/movie/movie-content/movie-page.interface'
import { HEADER_HEIGHT } from '@/components/movie/movie.constant'

export const MovieContent: FC<IMovieComponent> = ({ movie, y }) => {
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)

	return (
		<Animated.ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
			onScroll={Animated.event(
				[
					{
						nativeEvent: { contentOffset: { y } }
					}
				],
				{
					useNativeDriver: true
				}
			)}
			contentContainerStyle={{
				paddingTop: HEADER_HEIGHT / 1.3
			}}
		>
			<MovieInfo movie={movie} y={y} />
			<View>
				<VideoPlayer video={movie.videoUrl} />
				<ActorCarousel actors={movie.actors} />
				<RelatedMovies
					currentMovieId={movie._id}
					genreIds={movie.genres.map(({ _id }) => _id)}
				/>
			</View>
		</Animated.ScrollView>
	)
}
