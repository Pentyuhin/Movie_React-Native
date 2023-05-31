import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { MovieService } from '@/services/movie.service'

export const useUpdateCountOpened = () => {
	const { params } = useTypedRoute<'Movie'>()

	const { mutate } = useMutation([], () =>
		MovieService.updateCountOpened(params.slug)
	)
	useEffect(() => {
		mutate()
	}, [])
}
