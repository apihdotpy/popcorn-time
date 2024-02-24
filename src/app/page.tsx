import { MoviesResponse } from '@/types/movie'
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
        <header className="contents lg:fixed lg:inset-0 lg:z-40 lg:flex">
          <div className="contents dark:border-slate-50/[0.05] lg:block lg:w-72 lg:border-r lg:border-slate-900/10 xl:w-80">
            <div className="fixed inset-0 top-0 z-50 flex h-14 items-center justify-between gap-12 bg-white/50 px-4 backdrop-blur-sm transition dark:bg-slate-900/20 dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80">
              <div className="absolute inset-x-0 top-full h-px bg-slate-900/[.075] transition dark:bg-white/[.075]"></div>
              Navbar
            </div>
          </div>
        </header>
        <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
          <main className="flex-auto">
            <div className="flex h-full flex-col pb-10 pt-16">
              <div className="mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
                  {data?.results.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
