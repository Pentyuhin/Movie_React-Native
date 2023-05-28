import {FC} from 'react'
import {Layout} from "@/components/ui/Layout";
import {useGetAllMovies} from "@/components/screens/home/useGetAllMovies";
import {Loader} from "@/components/ui/Loader";
import {Carousel} from "@/components/screens/home/carousel/Carousel";

export const Home: FC = props => {

	const {movies, isLoading} = useGetAllMovies()
	return (
		<Layout>
			{isLoading ? <Loader /> : movies?.length && <Carousel movies={movies}/> }
		</Layout>
	)
}
