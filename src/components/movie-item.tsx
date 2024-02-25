import Image from 'next/image'

import { Movie } from '@/types/movie'
import { getYear } from '@/lib/utils'

interface MovieItemProps {
  movie: Movie
}

export function MovieItem({ movie }: MovieItemProps) {
  return (
    <div className="grid max-w-4xl grid-cols-4 rounded-xl bg-slate-800 p-4 lg:grid-cols-1 lg:rounded-none lg:bg-transparent lg:p-0">
      <div className="col-span-full col-start-2 row-start-1 rounded-lg lg:relative lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col-reverse lg:bg-gradient-to-t lg:from-black/75 lg:via-black/0 lg:p-3">
        <div className="flex items-center justify-between lg:flex-col-reverse lg:items-start">
          <h1 className="mr-2 line-clamp-1 text-lg font-semibold dark:text-white dark:sm:text-white lg:mr-0 lg:mt-1">
            {movie.title}
          </h1>
          <p className="mb-0 text-sm font-medium leading-6 dark:text-white lg:text-white">
            {getYear(movie.release_date)}
          </p>
        </div>
        <p className="mt-2 line-clamp-2 lg:hidden">{movie.overview}</p>
      </div>
      <div className="col-start-1 lg:row-start-1">
        <Image
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
          alt={movie.title}
          width={220}
          height={500}
          loading="lazy"
          className="h-[90px] w-[60px] rounded-lg object-cover lg:h-[400px] lg:w-full"
        />
      </div>
    </div>
  )
}
