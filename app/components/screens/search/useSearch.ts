import { useQuery } from '@tanstack/react-query'

import { useSearchForm } from '@/components/screens/search/useSearchForm'

import { MovieService } from '@/services/movie.service'

export const useSearch = () => {
	const { searchTerm, debounceSearch, control } = useSearchForm()

	const { data: movies, isLoading } = useQuery(
		['search movies', debounceSearch],
		() => MovieService.getAll(debounceSearch),
		{
			enabled: !!debounceSearch
		}
	)

	return { movies, isLoading, control, searchTerm }
}
