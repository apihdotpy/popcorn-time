import { MoviesResponse } from '@/types/movie'
import { Button } from '@/components/ui/button'
import { MovieItem } from '@/components/movie-item'
import { Navbar } from '@/components/navbar'

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
    <div className="h-full">
      <div className="h-full lg:ml-72 xl:ml-80">
        <Navbar />
        <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
          <main className="flex-auto">
            <div className="flex h-full flex-col pb-10 pt-16">
              <div className="mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                  {data?.results.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-x-3">
              <Button>Previous</Button>
              <Button>Next</Button>
            </div>
          </main>
          Hea
        </div>
      </div>
    </div>
  )
}
