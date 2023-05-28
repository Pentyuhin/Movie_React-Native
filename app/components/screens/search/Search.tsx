import { FC } from 'react'
import { View } from 'react-native'

import { useSearch } from '@/components/screens/search/useSearch'
import { Layout } from '@/components/ui/Layout'
import { Loader } from '@/components/ui/Loader'
import { Field } from '@/components/ui/form-elements/field/Field'
import { Heading } from '@/components/ui/heading/Heading'
import { MovieCatalog } from '@/components/ui/movie/catalog/MovieCatalog'

export const Search: FC = () => {
	const { searchTerm, movies, control, isLoading } = useSearch()

	return (
		<Layout>
			<Heading title='Search' />
			<View className='mt-3'>
				<Field
					control={control}
					name='searchTerm'
					placeholder='Type something...'
					keyboardType='web-search'
				/>
			</View>

			{!!searchTerm ? (
				<View className='mt-3'>
					{isLoading ? <Loader /> : <MovieCatalog title='' movies={movies} />}
				</View>
			) : null}
		</Layout>
	)
}
