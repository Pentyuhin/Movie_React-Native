import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { Description } from '@/components/ui/heading/Description'
import { Heading } from '@/components/ui/heading/Heading'
import { IMovieCatalog } from '@/components/ui/movie/catalog/movie-catalog.interface'
import { MovieItem } from '@/components/ui/movie/movie-item/MovieItem'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

export const MovieCatalog: FC<IMovieCatalog> = ({
	description,
	isBackButton,
	movies = [],
	title
}) => {
	const { goBack } = useTypedNavigation()

	return (
		<View>
			<View>
				<Heading title={title} className='mb-3' />
				{isBackButton && (
					<Pressable onPress={goBack}>
						<Ionicons
							name='arrow-back-circle-outline'
							size={32}
							color='white'
						/>
					</Pressable>
				)}
				{description && <Description text={description} />}

				<ScrollView showsHorizontalScrollIndicator={false}>
					<View className='flex-row flex-wrap justify-center mt-5 mb-32'>
						{movies?.length ? (
							movies.map((movie, index) => (
								<View className='mb-6' key={movie._id}>
									<MovieItem
										index={index}
										movie={movie}
										style={{ width: 160 }}
									/>
								</View>
							))
						) : (
							<Text className='text-white text-lg'>Elements not found</Text>
						)}
					</View>
				</ScrollView>
			</View>
		</View>
	)
}
