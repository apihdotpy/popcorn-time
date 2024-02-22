import { MoviesResponse } from '@/types/movie'
import { MovieItem } from '@/components/movie-item'

async function getMovies(): Promise<MoviesResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies?`)
  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }
  return res.json()
}

export default async function Home() {
  const data = await getMovies()
  return (
    <main>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {data?.results.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  )
}
