import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { ISearchFromData } from '@/components/screens/search/search.interface'

import { useDebounce } from '@/hooks/useDebounce'

export const useSearchForm = () => {
	const { control, watch } = useForm<ISearchFromData>({
		mode: 'onChange'
	})

	const searchTerm = watch('searchTerm')
	const debounceSearch = useDebounce(searchTerm, 500)

	return useMemo(() => ({ debounceSearch, searchTerm, control }), [searchTerm])
}
